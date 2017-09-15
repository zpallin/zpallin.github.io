---
layout: default
---

<h1>{{ page.category }}</h1>

{% for post in site.categories[page.category] %}
  <span class="post-meta">{{ post.date | date: '%b %d, %Y' }}</span>
  <h2><a class="post-link" href="{{ post.url }}">{{ post.title }}</a></h2>
  <p></p>
{% endfor %}
