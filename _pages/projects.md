---
layout: page
permalink: /projects/
title: Projects
description: 
nav: false
nav_order: 3
---


<!-- pages/projects.md -->
<div class="projects">
{% if site.projects != blank -%} 
<div class="table-responsive">
    <table class="table table-sm table-borderless">
    {%- assign projects = site.projects | reverse -%} 
    {% for item in projects %} 
    <tr>
        <th scope="row">{{ item.date | date: "%b, %Y" }}</th>
        <td>
        {% if item.inline -%} 
            {{ item.content | remove: '<p>' | remove: '</p>' | emojify }}
        {%- else -%} 
            <a class="projects-title" href="{{ item.url | relative_url }}">{{ item.title }}</a>
        {%- endif %} 
        </td>
        <td>
        {% if item.place -%} 
            <span class="projects-place">{{ item.place }}</span>
        {%- endif %}
        </td>
    </tr>
    {%- endfor %} 
    </table>
</div>
{%- else -%} 
<p>No projects so far...</p>
{%- endif %} 
</div>