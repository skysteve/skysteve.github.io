---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

<div class="columns">
      <div class="column">
            <p class="heading has-text-centered">Latest Posts</p>
            <table class="table table-striped table is-fullwidth">
            {%- for post in site.posts -%}
                  <tr class="post-link" data-url="{{ post.url | relative_url }}">
                  {%- assign date_format = site.date_format | default: "%b %-d, %Y" -%}
                        <td>{{ post.date | date: date_format }}</td>
                        <td><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></td>
                  </tr>
                {%- endfor -%}
            </table>
      </div>
      <div class="column">
            <figure class="image is-square" id="home-img">
                  <picture>
                        <!--<source srcset="/images/index/img_2.webp"  type="image/webp" media="(min-width: 200px)">-->
                        <img src="{{ "/assets/images/index/img_2.png" | relative_url }}">
                  </picture>
                  
            </figure>
      </div>
</div>