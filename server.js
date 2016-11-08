var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

app.listen(process.env.PORT || 8080, function(){
	console.log('Server is running at http://localhost:8080');
});

//Type in node server.js and let it run on gitbash and then type the address http://localhost:8080 on google chrome.