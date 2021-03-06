var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article1',function(req,res)
{

 res.sendFile(path.join(__dirname, 'ui', 'article1.html'));    
});
app.get('/article2',function(req,res)
{
res.send( 'article12 server here');
    
});
app.get('/article3',function(req,res)
{
res.send( 'article3 server here');
    
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/146.jpeg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '146.jpeg'));
});
//mypracticecode//
app.get('article1',function(req,res)
{
 res.sendfile(path.join(__dirname,'ui','article1.html'));   
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
