

var movie = require('./movie');
var threeFavouriteMovies = ['Elf','Batman','Wolverine'];
threeFavouriteMovies.forEach(function(film){
  // your code here
})


var randomMovieArray = ['Elf','Batman','Wolverine'];

var randomNumber = Math.floor((Math.random() * randomMovieArray.length - 1) + 1);

var randomMovie = randomMovieArray[randomNumber];

console.log(randomMovie);

