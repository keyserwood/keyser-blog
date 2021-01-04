---
layout: post
title:  "Creating a flask API"
date:   2021-01-04 17:00:00 +0100
categories: data science
---
# Flask API 

> Après avoir créé un API Flask et l'avoir déployé sur heroku nous allons mettre en forme les donnés de ce dernier sur notre blog.
Sur ces [bons conseils](https://www.raymondcamden.com/2016/03/01/adding-an-api-to-a-static-site).

# Lire un fichier JSON (/data/products)

## Nos produits : 
<ul class='post-list'>
{% for p in site.data.products %}
<li>{{p.name}} at {{p.price}}</li>
{% endfor %}
</ul>

## Nos films 

var request = new XMLHttpRequest()

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach((movie) => {
      console.log(movie.title)
    })
  } else {
    console.log('error')
  }
}

request.send()