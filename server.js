//website to understand this whole concept ... https://debugmode.net/2014/01/14/create-echo-server-in-node-js/

var express = require('express');

var app = express();

app.get('/', function(request, response) {
    response.json({
        name: 'Kim Gordon',
        instrument: 'Bass'
    });
});

// When you visit /headers the server should return an object containing the request headers.
app.get('/headers', function(request, response) {
  var requestHeaders = request.headers;

  response.json({
    req: requestHeaders
  });
});

// When you visit /headers/:header_name the server should return a string containing the contents of the specified header.
app.get('/headers/:header_name', function(request, response) {
  // console.log(request.params);
  var headerName = request.params.header_name;
  console.log(headerName);
  response.json({
    headerName: request.headers[headerName.toString()]
    // headerName: request.headers.headerName
  });
});

// When you visit /version the server should return a string containing the HTTP version of the request.
app.get('/version', function (request, response) {
  response.json({
    version: request.httpVersion
  })
});

app.listen(process.env.PORT || 8080, function(){
	console.log('Server is running at http://localhost:8080');
});

//Type in node server.js and let it run on gitbash and then type the address http://localhost:8080 on google chrome.