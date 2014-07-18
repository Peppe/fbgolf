var paintNewCourse = function(course) {
  var nameDiv = "<div class='name'>"+course.name+"</div>";
  var parSum = course.pars.reduce(function(a,b){return a+b});
  var detailsDiv = "<div class='details'><strong>"+course.city+"</strong> - "+course.pars.length+" väylää, par "+parSum+"</div>";
  $("#courselist").append("<div class='course'>"+nameDiv+detailsDiv+"</div>");
}

var course = null;
$('#courseselect').on("click", ".course", function(e) {
  $(course).removeClass("selected");
  if (this != course) {
    $(this).addClass("selected");
    course = this;
    $('#button-startgame').css("opacity", "1");
  } else {
    course = null;
    $('#button-startgame').css("opacity", "0");
  }
  e.preventDefault();
});

// init
var initCourseView = function(){
  var count = game.players.length;

  // update players in the course selection view
  var coursePlayersString = null;
  if(game.players.length == 1){
    coursePlayersString = "1 pelaaja";
  } else {
    coursePlayersString = game.players.length + " pelaajaa";
  }
  $('#button-courseplayers').text(coursePlayersString + ": " + game.players.join(", "));
  
  $("#courselist").empty();
  courses.forEach(function(course) {
    paintNewCourse(course);
  });
};

$('#button-courseplayers').click(function(){
    switchView('view-players');
    initPlayerView();

});

$('#button-startgame').click(function(){
    switchView('view-game');
    initGameView();
});
