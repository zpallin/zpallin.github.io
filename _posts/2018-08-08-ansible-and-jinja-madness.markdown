---
layout: post
title:  'weird comma problem with Ansible and Jinja2'
date:   2018-08-09 8:29:00 -0700
categories:
- jinja2
- Ansible
- tech
---

I have been using Ansible for a while and in an environment that is probably not a best-fit for Ansible. That means all of the weakpoints of the language are shining through brightly. It means a lot of headaches for me and an intense desire to move back to Chef, or maybe try out Puppet or Salt.

Without getting into too many details about our specific problem that we had a while ago, let me just talk about the problem itself. I was using the `assemble` module to generate a JSON valid file when I discovered an irritating problem in the intersection of Jinja2 templating and Ansible. 

To assembled the JSON file, it would need to contain contain a header file and a footer file. The encapsulated data would be numerous list objects submitted by whatever hosts were running in the play. At the end, all of the files would be assembled into a single JSON file.

I have a better way to do it at the time, so I had to dynamically generate the values from facts, so I decided to pass the list objects as a dict into an included task inside a role. It looked something like this:

```yaml
# role_name/tasks/main.yml

- name: insert dict into include
  include_tasks: generate_json_fragment.yml
  vars:
    list_object:
      name: "stuff1"
      data: "otherStuff"
      number: 10
```

From there, inside `generate_json_fragment.yml` I would have to turn it into a json string.

```yaml
# role_name/tasks/generate_json_fragment.yml

- name: convert list_object into json string
  set_fact:
    list_object_string: "{{list_object | to_json}}"
```

But here was the catch... Because this needed to be valid JSON, each list object would need to be terminated with a comma except for the last one. Since `assemble` works by assembling all files in alphabetical order, the header file would be prepended with `00-`, the footer with `20-`, the comma separated `list_objects` with `01-` and the final `list_object` with `02-`. 

```yaml
# role_name/tasks/generate_json_fragment.yml

# for now I'll skip the last_item fact logic but it would determine 
# if this would be the last item in the object list and worked fine

- name: create file name
  set_fact:
    file_name: "{{fragment_dir}}/{{'01-' if last_item else '02-'}}{{list_object.name}}"

- name: generate list_object file
  local_action: #because we were writing a local file
    module: copy
    dest: "{{filename}}"
    content: "{{list_object_string}}{{'' if last_item else ','}}"
```

I was expecting the output of this file to look like this:

```json
{"Name": "stuff1", "data": "otherStuff", "number": "10"},
```

But instead, I got this:

```json
[{"Name": "stuff1", "data": "otherStuff", "number": 10}]
```

Well, that doesn't look right... Why is it suddenly a list? 

I tried multiple ways around this. I tried to use `set_fact` to add the comma and then `debug` to message it out. I tried to `list_object|string` but it just gave me the same thing (why would I even use `to_json`???).

It all gave the same result. 

**Here's the problem**: Jinja2 filtering wrapped brackets around the string. Why was this happening? It appears that when Jinja2 reads the string, it runs `parse_tuple` -- an inner function -- against the string. If it detects a single appending comma, it will convert the entire string into a "tuple".

This was irritating, but I had a quick solution.

```yaml
# role_name/tasks/generate_json_fragment.yml

- name: append comma if not last_file
  local_action:
    module: shell
    cmd: "echo \",\" >> {{filename}}"
  when:
  - not last_item
```

Dirty, but it works. By echoing in the comma through shell, I solve the problem, despite this being a pretty weak solution. Luckily I am was running a parallel windows stack and our linux boxes were all the same flavor, otherwise this would be potentially harmful. Oh well! I needed a quick solution.

Moving on, I thought my problems were solved, but then I hit another problem.

I realized I needed to have the number be passed by variable, so I quickly hooked that up:

```yaml
# role_name/tasks/generate_json_fragment.yml

- name: insert dict into include
  include_tasks: generate_json_fragment.yml
  vars:
    list_object:
      name: "stuff1"
      data: "otherStuff"
      number: "{{passed_number}}"
```

Here is my file after everything:

```yaml
{"Name": "stuff1", "data": "otherStuff", "Number": "100"},
```

Sadly, I needed that `Number` value to be an integer, so I did this intuitive thing, pass it to `|int`.

```yaml
number: "{{passed_number|int}}"
```

But it yielded the same result.

**Here's the problem**: Jinja2 can convert values to integers internally for its own parsing, but it will always output a string to Ansible. This is a *fundamental weakness* of Ansible that requires you to device "creative" ways of handling it. One way is to simply never pass integers around, which is absurd. The other way is to use a template for the JSON file, which is also absurd (that's because inside the template it's one, *big* string so the use of interpolation will not add quotes within it). 

I wanted to preserve the yaml dict structure, however, so I opted (again) for a hacky solution.

```yaml
- name: remove quotes from integers defined in the list_object string
  set_fact:
    list_object_string: "{{list_object|to_json|regex_replace('\"([0-9]*)\"','\\1')}}"
```

There, by having any string values containing only numbers converted automatically to integers, I essentially solved my problem (luckily the json batch file wouldn't need to have any string'd integers).

**Let me just say** I don't like this whatsoever, and it's one of the many reasons I no longer want to work with Ansible. For all the Ansible lovers out there, don't worry I totally understand why you want to use it still. Just for me, it's no longer an option.

Cheers.
