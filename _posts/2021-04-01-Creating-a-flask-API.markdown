---
layout: post
title:  "Creating a flask API"
date:   2021-01-04 17:00:00 +0100
categories: data science
---
<link rel="stylesheet" href="/keyser-blog/assets/css/styles.css">
<script src = "/keyser-blog/assets/js/flask_api_post_script.js"></script>
# Flask API 

> Après avoir créé un API Flask et l'avoir déployé sur heroku nous allons mettre en forme les donnés de ce dernier sur notre blog.
Sur ces [bons conseils](https://www.raymondcamden.com/2016/03/01/adding-an-api-to-a-static-site).


### Appuyez sur le bouton pour charger notre liste de films
> La liste de film est chargée depuis un Api Flask deployé sur [heroku](https://keyserwood-flask-movies-app.herokuapp.com/)


## Nos films 

> Voici la liste des films


<div class = "container">
	<button id ='button1'>Récupérer la liste</button>
	<button id ='button2'>Créer un nouveau film</button>
</div>

<div id = 'result'></div>
<br>

<script type="text/javascript">
document.getElementById('button1').addEventListener('click', loadJSON);
document.getElementById('button2').addEventListener('click', postReq);
</script>

#### Formulaire d'ajout de film 



<div class="container">
	<form name="form2">
		<label>Nom du film</label>
		<input type="text" name="film_name" value=""> <br />
		<label>Directeur</label>
		<input type="text" name="film_director" value=""> <br />
		<label>Genre</label>
		<input type="text" name="film_genre" value=""> <br />
		<label>Collection (ex: 200)</label>
		<input type="text" name="film_collection" value= ""> <br />
		<br/>
		<input type="button" onclick="postFormReq(form2)" value="Ajouter le film"/>
	</form>
</div>


> Voici le résultat de la requête POST

<div id = 'post_result'></div>
