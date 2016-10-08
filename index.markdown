---
title: Index
date: 2016-10-08 00:51:00 Z
---

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla autem officiis minus alias rerum quaerat! Explicabo, sequi excepturi. Ullam fugiat recusandae quo laboriosam libero animi architecto, quam consectetur sapiente vero?


<div class="card-columns">
  {% for work in site.work %}
    <a href="{{ work.url }}">
      <div class="card">
        <img class="card-img-top" src="{{ "/uploads/abe.jpg" | prepend: site.baseurl }}" alt="Card image cap">
        <div class="card-block">
          <h4 class="card-title">{{work.title}}</h4>
        </div>
      </div>
    </a>
  {% endfor %}
</div>
