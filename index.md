---
title: Maged Abdelsalam
position: 0
layout: page
---

<img class="right" src="uploads/maged.png" alt="Maged Abdelsalam's profile picture">

Hi. I'm Maged, a Visual/UX/Interaction/Product designer based in Seattle. I am currently working as a User Experience designer at ChoiceMap. Apart from design, I spend most of my time making card games or playing basketball.

### Work

* [ChoiceMap](https://choicemap.co/)↗ (social, visual, interaction)
* [Bramble Lab](http://www.bramblelab.com)↗ (social, visual, interaction) {% for post in site.posts %}
* [{{ post.title }}]({{ post.url }}) {% if post.tags.size > 0 %}({{ post.tags | sort | join: ", " }}){% endif %}{% endfor %}
