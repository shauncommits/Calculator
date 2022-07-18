var request = new XMLHttpRequest();

request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=U4mJ20GPSkhbU78gAApp8ElTnGCrEOUJ&tag=student$rating=pg-13');

request.onload = function() {
	var response = request.response;
	var jsonData = JSON.parse(response);
    var originalUrl = jsonData.data.images.original.url;
	//Create gif on page
	var gif = document.createElement('img');
	gif.setAttribute('src', originalUrl);
    var divObj = document.getElementById("tutor");
	divObj.appendChild(gif);
    
	
};

request.send();