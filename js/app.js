// disable rubberbanding
$('html').on('touchmove', function(e){
  var elem = e.originalEvent.touches[0].target;
  while (elem != null) {
    if (elem.classList.contains("scrollable")) return;
    elem = elem.parentElement;
  }
  e.preventDefault();
});

var paintNewPlayer = function(name) {
  if (name == "") return;
  var player = $("<div class='player'>"+name+"</div>");
  $("#playerlist").append(player);
}

var updateCourseSelectionWidget = function() {
  var count = $('#playerlist .selected').size();
  $('#selectcourse').css("opacity", count===0?"0":"1");

  if (count > 0) {
    $('#playercount').text(count+" pelaaja"+(count!==1?"a":""));
  }
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
  playeradd[0].value = "";
  playeradd.blur();
  addingNewPlayer = false;
}

playeradd.blur(addPlayerFunc);
playeradd.keypress(function(e){if (e.which==13) addPlayerFunc()});

$('#playerselect').on("click", ".player", function(e) {
  $(this).toggleClass("selected");
  updateCourseSelectionWidget();
  e.preventDefault();
});


// init
paintNewPlayer("Aku");
paintNewPlayer("Wöffi");
paintNewPlayer("Jozpe");
paintNewPlayer("Sanqu");
