var Promise = require('bluebird');
var express = require('express')
var app = express()
var fs = require('fs');
var ejs = require('ejs');
var formidable = require('formidable');

var form = fs.readFileSync(__dirname+'/views/index.html', 'utf8');
const folderPath = __dirname + '/views';
app.engine('html', require('ejs').renderFile);
app.use(express.static(folderPath))

app.get('/', function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.send(form);
});

// Post files
app.post('/uploads', function (req, res) {
  console.log("Upload");
  var uploadForm = new formidable.IncomingForm();
  uploadForm.parse(req, function (err, fields, files) {
    
    fs.readFile(files.image.path, function (err, data) {
      var imageName = "image"
      /// If there's an error
      if (!imageName) {
        console.log("There was an error")
        res.redirect("/");
        res.end();
      } else {
        var newPath = __dirname + "/views/uploads/fullsize/" + imageName;
        // write file to uploads/fullsize folder
        fs.writeFile(newPath, data, function (err) {
          if (err) {
            console.log("error");
            throw err;
          }
          console.log("write file");
          res.redirect("/filter");
        });
      }});
  });
});

// Show files
app.get('/filter', function (req, res) {
  console.log("get image ");
  var filter = fs.readFileSync(__dirname+'/views/filter.html', 'utf8');
  res.render(__dirname+'/views/filter.html',{user:req.params.user});
});

app.listen(3000, function () {
  console.log('Image filter web app listening on port 3000!');
})