---
title: Index
date: 2016-10-08 00:51:00 Z
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla autem officiis minus alias rerum quaerat! Explicabo, sequi excepturi. Ullam fugiat recusandae quo laboriosam libero animi architecto, quam consectetur sapiente vero?

<div class="col-xs">
  {% for blog in site.blog %}
    <div class="blog--list">
      <div class="blog--data">

        <a href="{{ blog.url }}"><h2 class="blog--title">{{ blog.title }}</h2>
        <date>{{ blog.date | date: '%B %d, %Y' }}</date>
        <p class="blog--content">{{ blog.content | strip_html | truncatewords: 50 }}</p>
        <span class="read-more">Read more...</span></a>
      </div>
    </div>
  {% endfor %}
</div>
