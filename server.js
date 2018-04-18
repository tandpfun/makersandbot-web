var express = require('express');
var app = express();
app.set("port", process.env.PORT);
var http = require("http");
var http = require('http'); //importing http
var ejs = require('ejs');
app.use(express.static('public'))
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})
const listener = app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${listener.address().port}`)
})
const DBL = require("dblapi.js");
const dbl = new DBL(process.env.TOKEN);
dbl.getStats("414568996017537044").then(function(result) {
   //result.server_count.appendTo('ul#servers') //will log results.
  
})
