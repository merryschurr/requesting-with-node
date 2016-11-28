
module.exports = {
  $.ajax({
  	url: 'http://www.omdbapi.com/?t=Elf&y=&r=json',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
    console.log(data);
  });

  $.ajax({
  	url: 'http://www.omdbapi.com/?t=Batman&y=&r=json',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
    console.log(data);
  });

  $.ajax({
  	url: 'http://www.omdbapi.com/?t=Wolverine&y=&r=json',
    method: 'get', // GET by default
    dataType: 'json' // Intelligent Guess by default (xml, json, script, or html)
  }).done(function(data){
    console.log(data);
  });

};


