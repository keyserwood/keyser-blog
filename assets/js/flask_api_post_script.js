// Load and print JSON
function loadJSON(){
  fetch('https://keyserwood-flask-movies-app.herokuapp.com/')
  .then(function(response){
    // console.log(response);
    return response.json();
  })
  .then(function(data){
    // console.log(data);
    let html ="<div class='container' style='margin:10px '> ";
    data.Movies.forEach(function(movie){
      html+= '<li>'+movie.Title+' '+movie.Genre+ '</li>';     
      });
    html+= " </div>";
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
    xhr.onload = function () {
    // do something to response
    var jsonResponse = JSON.parse(xhr.responseText);
    console.log(jsonResponse);
    // Regarding of the length of the response we now if we have created the movie
    var respLength = Object.keys(jsonResponse).length;
    if (respLength ==4){
      // Fill POST request result 
      html = '<p style="color : green;">Le film a bien été ajouté </p>';
    document.getElementById('post_result').innerHTML = html;

    } 
    if (respLength==1)
    {
        html = '<p style="color : red;">Le film a deja été ajouté </p>';
    document.getElementById('post_result').innerHTML = html;

    }};

}