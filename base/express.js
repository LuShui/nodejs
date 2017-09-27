var express = require('express');
var url = require('url');
var app = express();
 
 
app.get('/', function (req, res) {
   res.send('Hello World');
});


app.get('/app', function (req, res) {
   
   res.send('this is app ');

});
 
var server = app.listen(9999);
