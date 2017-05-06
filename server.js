var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var path = require("path");
var PORT = 3000;
var reservationsArr =[{reserve_name:"law", reserve_phone:"123", reserve_email:"law@law.com", reserve_uniqueID:"123"}];

 
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

app.get("/api/tables", function(req, res) {
	res.json(reservationsArr)
});

app.post("/api/new", function(req, res) {
  var newReservation = req.body;
  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);

  reservationsArr.push(newReservation);

  res.json(newReservation);
  console.log(reservationsArr)
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
