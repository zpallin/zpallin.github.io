---
layout: default
---

<h1>{{ page.tag }}</h1>

{% for post in site.categories[page.category] %}
  <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
  <p></p>
{% endfor %}
