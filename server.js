var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var path = require("path");
var PORT = 3000;

 
// app.get('/', function (req, res) {
//   res.sendFile('Hello World')
// })

app.get("/", function(req, res) {
 res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
 res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/tables", function(req, res) {
 res.sendFile(path.join(__dirname, "tables.html"));
});
 
// app.listen(3000);

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
