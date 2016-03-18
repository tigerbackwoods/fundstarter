var fs = require("fs");
var filename = "./index.html";
var express = require('express')
var app = express()

/* serves all the static files*/
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

/*serves main page*/
app.get('/', function(request, response) {
	response.write(fs.readFileSync(filename, "utf8"))
//response.sendfile('index.html') 
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
