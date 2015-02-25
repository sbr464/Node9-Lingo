var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'JD4hh90CmZbdqjskwaGKlQ%3D%3D'
});

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/languages', indexController.languages);
app.post('/translatePost', indexController.translatePost);


var server = app.listen(4267, function() {
	console.log('Express server listening on port ' + server.address().port);
});
