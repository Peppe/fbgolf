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

  // update the state of the "next view" button
  $('#button-selectcourse').css("opacity", count===0?"0":"1");
  if (count > 0) {
    $('#playercount').text(count+" pelaaja"+(count!==1?"a":""));
  }

  // update players in the course selection view
  $('#button-courseplayers').text(count+" pelaaja"+(count!==1?"a":"") + ": "+players.join(", "));

  e.preventDefault();
});


// init
paintNewPlayer("Aku");
paintNewPlayer("Wöffi");
paintNewPlayer("Jozpe");
paintNewPlayer("Sanqu");

$('#button-selectcourse').on('click', {view: 'view-course'}, switchView );
