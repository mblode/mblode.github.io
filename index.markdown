---
title: Index
date: 2016-10-08 00:51:00 Z
---

# Hi, my name is Matthew Blode and I make things for the internet.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptas ex magni, a, quaerat at harum placeat labore, fugiat praesentium minima odio vero perferendis, nihil dolorem expedita commodi aspernatur voluptatum.

## Hello
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem nihil, dicta ab corporis voluptates itaque similique, minima modi ratione eum voluptatibus eligendi totam. Placeat numquam maxime neque nulla iste eum!

<div>
  {% for work in site.work %}
    <div class="col-6">
      <img class="card-img-top" src="{{ "/uploads/abe.jpg" | prepend: site.baseurl }}" alt="Card image cap">
    </div>

    <div class="col-6 description">
      <p class="caption">SPRING 2015 {{work.year}}</p>
      <h2>{{work.title}}</h2>
      <h3>Website Design &amp; Development {{work.tag}}</h3>
      <hr class="hard-rule"/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem incidunt dolore mollitia cum quas voluptates unde vel saepe accusantium quod amet eveniet dolorem natus earum, architecto deserunt esse nisi libero!</p>
      <a href="{{ work.url }}" class="button">Read more →</a>
    </div>
  {% endfor %}
</div>