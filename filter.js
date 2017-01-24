var Promise = require('bluebird');
var express = require('express')
var app = express()
var fs = require('fs');
var ejs = require('ejs');
var jimp = require('jimp');
var formidable = require('formidable');
var im = require('imagemagick');

var form = fs.readFileSync('./views/filter.html', 'utf8');

console.log("here");

app.get('/routes/filter', function (req, res) {
  console.log("get image ");    
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(form);
});



// // Show files
// app.get('/uploads/fullsize/:file', function (req, res) {
//   console.log("get image ");
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   var filter = fs.readFileSync('./views/filter.html', 'utf8');
//   res.end(filter);
// });

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// })