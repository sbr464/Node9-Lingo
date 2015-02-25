var BeGlobal = require('node-beglobal');
var beglobal = new BeGlobal.BeglobalAPI({
  api_token: 'JD4hh90CmZbdqjskwaGKlQ%3D%3D'
});

var _ = require('underscore');

// var languagelist = [];
// var languagelistTo = [];

var availLanguages = {
  languageFrom : [],
  languageTo : []
};

beglobal.languages.all(
  function(err, results) {
    if (err) {
      return console.log(err);
    }


    availLanguages.languageFrom = _.uniq(results, false, function(p){
      return p.from.name
    });    

    availLanguages.languageTo = _.uniq(results, false, function(p){
      return p.to.name
    });  
  }
);




var indexController = {
	index: function(req, res) {
		res.render('index');
	},



  translatePost: function(req, res) {

    beglobal.translations.translate(
      {text: req.body.wordInput, from: req.body.translateFrom, to: req.body.translateTo},
      function(err, results) {
        if (err) {
          return console.log(err);
        }
        res.send(results.translation);
      }
    );
  },



  languages: function(req, res) {
    res.send(availLanguages);

  }
};

module.exports = indexController;