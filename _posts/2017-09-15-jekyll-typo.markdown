---
layout: post
title:  "learning jekyll, and sudden typo! also, how not to troubleshoot"
date:   2017-09-15 00:38:15 -0700
categories:
- website
- jekyll
- tech
---

Well shit...

I spent a few hours over the last week trying to further my knowledge with jekyll as to make this site more accessible. It took a while, but I think I got it. I like the engine for the most part.

But the documentation is lacking. Maybe it's just that I've stared at enough documentation trying to learn the multitude of idiomatic software tools demanded by company overlords that I have gained a certain appreciation for simple tutorials that make it quick to process the information into long-term memory of which a byproduct is my lacerating disdain for crummy documentation. Say, for example, [this rusty piece of shit](https://doc.rust-lang.org/book/).

Then again, my documentation sucks, too, but fortunately I do not yet support any popular pieces of open source software! Mwuahahaha.

Anyway, as I'm playing with Jekyll I say "I like this!" (out loud, to myself). And when I do that, I realize suddenly what I need are some "category-filtered-blog-post" pages. You know, so I can just make `_post` files and add a little tag and have it do the math so I can also have one giant feed.

As I'm learning Jekyll, I have that typical moment when you're learning anything where you realize you've been re-reading the same paragraph in some software documentation multiple times because either the styling or writing has the innate desire to burn your eyes out (in this instance, their `code-highlights`). The next realization to follow that one is always that it's time to just scrape Stack Overflow for the solution.

But of course I enter my search into Google directly rather than just going to Stack Overflow and a random blogger appears: [Christianthropic](https://www.chrisanthropic.com/blog/2014/jekyll-themed-category-pages-without-plugins/)!

As I start skimming the blog entry, I realize I am definitely on the verge of spending too much time on this problem for my normal confort level, and his solution seems pretty neat... so... ctrl+c ctrl+p... 

```markdown
{% raw %}
---
layout: default
---
<h1>Simple Category Pages with vanilla Jekyll</h1>

{% unless page.content == '' %}
  <p>{{ page.content }}</p>
{% endunless %}

{% for post in site.categories.[page.category] %}
  <h2><a href=""></a></h2>
  <p></p>
{% endfor %}
{% endraw %}

```


Aaand it doesn't work. I stare at a few moments and then sigh. I then scour the net, and each time I find a solution, the examples never work. 

AGGGGGHHHH!

`...`

Right now you're thinking that I'm just a lazy coder. I'm thinking right now that it's weird you even want to read this.

In any case, this flags a ticket in my brain to come back and fix this later after work, which I do.

When I get home, after I do a few other things first (videogames), I finally sit down and decide to fix this once and for all. After hours of trying to copy and paste answers in, I've decided it's time to learn jekyll.

Well, I suspected something was wrong with this right away:

```
{% raw %}
{% for post in site.categories.[page.category] %}
{% endraw %}
```

My coding "spidey-senses" were tingling at that period between the "s" character and the open square-bracket. 

For those who don't know, the period (or full-stop) is used to denote a belonging of the latter variable-name to the former variable-name (such as `my.shit`, where my shit belongs to my... me... dammit). And well, the square brackets are used typically to pass a key to a dictionary (hash or whatever). Yea I won't explain it much further, but go learn [python](https://learnpythonthehardway.org/) or something and you'll know.

So I turn off my little imaginary police siren and sit down with the code and say "Look code, I don't know the [Liquid templating engine](https://shopify.github.io/liquid/)" nor did I read the Jekyll documentation... but I do know how to delete things!

So, to make a long story short I deleted the "." and it worked.

The End.
