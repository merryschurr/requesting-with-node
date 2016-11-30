var requireRequest = require('request');

var movie = function(movieTitle){
var movieInfo = requireRequest('http://www.omdbapi.com/?t=' + movieTitle, function (error, response, body) {
	var answerTitle = JSON.parse(body);
    console.log(answerTitle.Title);
 });
};

module.exports = movie;

