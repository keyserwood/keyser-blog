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

## Nos chiens 

<ul class='post-list'>


{% for dog in site.data.dogs %}
<li>{{dog.age}} </li>
{% endfor %}
</ul>

## Nos films 

<script> 
	$.getJSON('https://ben.balter.com/simple-api/dogs.json', function(data) {
    // JSON result in `data` variable
});
	var str = JSON.stringify(data, null, 2); // spacing level = 
    let d = new Date();
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
</script>
