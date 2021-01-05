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


### Appuyez sur le bouton pour charger notre liste de films
> La liste de film est chargée depuis un Api Flask deployé sur [heroku](https://keyserwood-flask-movies-app.herokuapp.com/)

<div class = "container">
	<button id ='button1'>JSON</button>
</div>

## Nos films 
> Voici la liste des films
<div id = 'result'></div>

<script  type="text/javascript">

document.getElementById('button1').addEventListener('click', loadJSON);

// Load and print JSON
function loadJSON(){
	fetch('https://keyserwood-flask-movies-app.herokuapp.com/')
	.then(function(response){
		// console.log(response);
		return response.json();
	})
	.then(function(data){
		// console.log(data);
		let html ="";
		data.Movies.forEach(function(movie){
			html+= '<li>'+movie.Title+' '+movie.Genre+ '</li>';	    
			});
		document.getElementById('result').innerHTML = html;

		});
	
}
</script>

<!-- <script type="text/javascript"> 
	$.getJSON('https://ben.balter.com/simple-api/dogs.json', function(data) {
    // JSON result in `data` variable
});
	var str = JSON.stringify(data, null, 2); // spacing level = 
    let d = new Date();
    document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"
</script>


<script type="text/javascript">
jQuery(window).load(function(){
            data = {};
                jQuery.ajax({
                    type: 'GET',
                    url: 'https://ben.balter.com/simple-api/dogs.json',
                    data: data,
                    dataType: 'json',
                    success: function(data) { 
                        console.log(data);
                        $.each( data, function(i, item) {
                             console.log(item);
                             document.write(i)                            // do something with your data here
                        });
                    }
                });
        });
    
</script>
<script type="text/javascript">
	for (let pas=0;pas <5; pas ++){
		document.write(pas)
	}
</script>
<script type="text/javascript">
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');	
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	today = mm + '/' + dd + '/' + yyyy;
	document.write(today);

</script>


 -->

