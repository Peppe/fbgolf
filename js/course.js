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
  } else {
    course = null;
  }
  e.preventDefault();
});

// init
paintNewCourse({
  name: "Lausteen frisbeegolfpuisto",
  city: "Turku",
  pars: [3,3,3,3,3,4,3,4,4,3,4,3,3,3,4,4,3,3,4,3,3,3,3]
});
paintNewCourse({
  name: "Urheilupuisto",
  city: "Turku",
  pars: [3,3,3,3,3,3,3,3,3]
});
paintNewCourse({
  name: "Patokosken Frisbeegolfrata",
  city: "Rovaniemi",
  pars: [3,3,3,3,3,3,3,3,3]
});

$('#button-courseplayers').on('click', {view: 'view-players'}, switchView );
