$('#button-goback').click(function(){
    switchView('view-course');
    initCourseView();
});

var initGameView = function(){
  var count = game.players.length;

  // update players in the course selection view
  var coursePlayersString = null;
  if(game.players.length == 1){
    coursePlayersString = "1 pelaaja";
  } else {
    coursePlayersString = game.players.length + " pelaajaa";
  }
  $('#game-players').text(coursePlayersString + ": " + game.players.join(", "));
};
