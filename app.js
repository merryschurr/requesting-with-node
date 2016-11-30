var movie = require("./movie.js");
var threeFavouriteMovies = ["Elf", "Batman", "Wolverine"];
threeFavouriteMovies.forEach(function(film) {
  movie(film);
});

