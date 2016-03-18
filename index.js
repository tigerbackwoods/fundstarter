/*
var fs = require("fs");
var filename = "./index.html";
var express = require('express')
var app = express()

/* serves all the static files*/

//app.set('port', (process.env.PORT || 5000))
//app.use(express.static(__dirname + '/public'))

/*serves main page*/
/*
app.get('/', function(request, response) {
	fs.readFile(filename, "utf8", function(err, data) {
		if (err) throw err;
		response.write(data);
		response.end();
	});
	//response.write(fs.readFileSync(filename, "utf8"))
//response.sendfile('index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
*/
var http = require('http');
var fs = require("fs");
var filename = "./index.html";
var requestListener = function (req, res) {
  res.writeHead(200);
  //res.end('Hello, World!\n');

  res.write(fs.readFileSync(filename, "utf8"));




}

var server = http.createServer(requestListener);
server.listen(8080);