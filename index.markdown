---
title: Index
date: 2016-10-08 00:51:00 Z
---

<div class="col">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla autem officiis minus alias rerum quaerat! Explicabo, sequi excepturi. Ullam fugiat recusandae quo laboriosam libero animi architecto, quam consectetur sapiente vero?
</div>

<div class="col">
  {% for work in site.work %}
      <a href="{{ work.url }}" class="card">
          <img class="card-img-top" src="{{ "/uploads/abe.jpg" | prepend: site.baseurl }}" alt="Card image cap">
          <div class="card-block">
            <h4 class="card-title">{{work.title}}</h4>
          </div>
      </a>
  {% endfor %}
</div>
