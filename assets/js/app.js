document.getElementbyId('button2').addEventListener
('click', loadJSON);

// Load and print JSON
function loadJSON()
{
	fetch('https://ben.balter.com/simple-api/dogs.json')
	.then(function(response)){console.log(response)}

}