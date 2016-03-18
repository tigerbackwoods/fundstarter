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

  fs.stat(filename, function(err, stats){
     if (err){
         return console.log(err);
     }
     console.log(stats.size);
     var buf = new Buffer(stats.size);

     fs.open(filename, 'r', function (err, fd) {
        if(err){
           return console.log(err);
        }
        fs.read(fd, buf, 0, stats.size, 0, function (err, bytesRead, buffer) {
           if(err){
              return console.log(err);
           }
           res.write(buffer.toString("utf8"));
           console.log(buffer.toString("utf8"));
           res.end();
        });
     });
       
  });

  //res.end('Hello, World!\n');

  //res.write(fs.readFileSync(filename, "utf8"));
  /*
  fs.readFile(filename, "utf8", function(err, data) {
		if (err) throw err;
		response.write(data);
		response.end();
	});
	*/

}

var server = http.createServer(requestListener);
server.listen(8080);