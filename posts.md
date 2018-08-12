---
layout: page
title: Posts
layout: default
---

<div class="posts-list">
<div class="tile is-ancestor">
  
{%- for post in site.posts -%}
<a href="{{ post.url | relative_url }}">
<div class="tile">
<div class="card">
{%- if post.image -%}
  <div class="card-image">
    <figure class="image is-4by3">
      <picture>
        <img src="{{ post.image | relative_url }}">
    </picture>
    </figure>
  </div>
{%- endif -%}
  <div class="card-content">
    <div class="media">
      {%- assign date_format = site.date_format | default: "%b %-d, %Y" -%}
      <div class="media-content">
        <p class="title is-4">{{ post.title | escape }}</p>
        <p class="subtitle is-6"><time datetime="{{ post.date | date: date_format }}">{{ post.date | date: date_format }}</time></p>
      </div>
    </div>

    <div class="content">
      {{ post.excerpt }}
    </div>
  </div>
  {%- if post.tags -%}
  <footer class="card-footer">
    {%- for tag in post.tags -%}
        <span class="card-footer-item">{{tag}}</span>
    {%- endfor -%}
  </footer>
  {%- endif -%}
</div>
</div>
</a>
{%- endfor -%}
</div>
</div>