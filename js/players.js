var paintNewPlayer = function(name) {
  if (name == "") return;
  var player = $("<div class='player'>"+name+"</div>");
  $("#playerlist").append(player);
}

var playeradd = $('#playeradd input');

// blur might cause an infinite loop, so we need a flag.
var addingNewPlayer = false;
var addPlayerFunc = function() {
  if (addingNewPlayer) {
    addingNewPlayer = false;
    return;
  }

  addingNewPlayer = true;
  paintNewPlayer(playeradd[0].value);
  playeradd.val("");
  playeradd.blur();
  addingNewPlayer = false;
}

playeradd.blur(addPlayerFunc);
playeradd.keypress(function(e){if (e.which==13) addPlayerFunc()});

$('#playerselect').on("click", ".player", function(e) {
  $(this).toggleClass("selected");

  var players = [];
  $('#playerlist .selected').each(function(i, elem) {
    players.push($(elem).text());
  });
  var count = players.length;
  game.players = players;
  // update the state of the "next view" button
  $('#button-selectcourse').css("opacity", count===0?"0":"1");
  if (count > 0) {
    $('#playercount').text(count+" pelaaja"+(count!==1?"a":""));
  }
  e.preventDefault();
});

var initPlayerView = function(){
  players.forEach(function(player) {
    paintNewPlayer(player);
  });
};

$('#button-selectcourse').click(function(){
    switchView('view-course');
    initCourseView();
});