---
layout: post
title:  "hi, i'm zpallin"
date:   2017-04-15 11:26:00 -0700
categories: 
- zpallin 
- firstblog
- meta
- about
---
{% highlight rust %}
fn hello() -> String {
  "You are".to_owned()
}
{% endhighlight %}

I figure I might publish some blog stuff. So, here it is, my zpallin site. Neato.

<ul>
  {% for tag in page.tags %}
    <li>
      <a href="/{{ site.tag_page_dir }}/{{ tag | slugify: 'pretty' }}/">{{ tag }}</a>
    </li>
  {% endfor %}
</ul>
