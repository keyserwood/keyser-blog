---
layout: post
title:  "Creating a flask API"
date:   2021-01-04 17:00:00 +0100
categories: data science
---
<link rel="stylesheet" href="/keyser-blog/assets/css/styles.css">
# Flask API 

> Après avoir créé un API Flask et l'avoir déployé sur heroku nous allons mettre en forme les donnés de ce dernier sur notre blog.
Sur ces [bons conseils](https://www.raymondcamden.com/2016/03/01/adding-an-api-to-a-static-site).
{
  width: 500px;
  clear: both;
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
	<button id ='button1'>GET</button>
	<button id ='button2'>POST Resquest</button>
</div>

## Nos films 

> Voici la liste des films

<div id = 'result'></div>

#### Formulaire d'ajout de film 
<script type="text/javascript">
	function afficher(form2){
		var testin = document.form2.input.value;
		document.form2.output.value = testin
	} 

</script>



<div class="container">
	<form name="form2">
		<label>Nom du film</label>
		<input type="text" name="film_name" value=""> <br />
		<label>Directeur</label>
		<input type="text" name="film_director" value=""> <br />
		<label>Genre</label>
		<input type="text" name="film_genre" value=""> <br />
		<label>Collection (ex: 200)</label>
		<input type="text" name="film_collection" value=""> <br />
		<br/>
		<button id ='add_film_button'>Ajouter le film</button>
	</form>
</div>


> Voici le résultat de la requête POST

<div id = 'post_result'></div>
<script  type="text/javascript">

document.getElementById('button1').addEventListener('click', loadJSON);
document.getElementById('button2').addEventListener('click', postReq);
document.getElementById('add_film_button').addEventListener('click', postFormReq);



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
// Post request
function postReq(){
	var request_body = JSON.stringify({director: "JM Poiré", genre: "Comique",collection: 500});
	
	var myHeaders = new Headers();
	var myInit = {method:'POST',
				  headers : myHeaders,
				  mode : 'cors',
				  body : request_body,
				  cache : 'default'};
    console.log(request_body);
    const xhr = new XMLHttpRequest();	

    xhr.open('POST','https://keyserwood-flask-movies-app.herokuapp.com/Les_Visiteurs');
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(request_body);
		
}
// Read Form and Send Post Req
function postFormReq(form2){
	// Scan form data
	var film_name = document.form2.film_name.value;
	var film_director = document.form2.film_director.value;
	var film_genre = document.form2.film_genre.value;
	var film_collection = document.form2.film_collection.value;
	// Create body & url for request
	var request_body = JSON.stringify({director: film_director, genre: film_genre,collection: film_collection});
	var url  = "https://keyserwood-flask-movies-app.herokuapp.com/"+film_name
	

	//Make POST request
	var myHeaders = new Headers();
	var myInit = {method:'POST',
				  headers : myHeaders,
				  mode : 'cors',
				  body : request_body,
				  cache : 'default'};
    const xhr = new XMLHttpRequest();	

    xhr.open('POST',url);
    xhr.setRequestHeader('content-type','application/json');
    xhr.send(request_body);

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

