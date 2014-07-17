var paintNewCourse = function(name) {
  if (name == "") return;
  var course = $("<div class='course'>"+name+"</div>");
  $("#courselist").append(course);
}

var courseadd = $('#courseadd input');

// blur might cause an infinite loop, so we need a flag.
var addingNewCourse = false;
var addCourseFunc = function() {
  if (addingNewCourse) {
    addingNewCourse = false;
    return;
  }

  addingNewCourse = true;
  paintNewCourse(courseadd[0].value);
  courseadd[0].value = "";
  courseadd.blur();
  addingNewCourse = false;
}

courseadd.blur(addCourseFunc);
courseadd.keypress(function(e){if (e.which==13) addCourseFunc()});

var course = null;

$('#courseselect').on("click", ".course", function(e) {
  $(course).removeClass("selected");
  $(this).addClass("selected");
  course = this;
  e.preventDefault();
});

// init
paintNewCourse("Lausteen frisbeegolfpuisto");
paintNewCourse("Urheilupuisto");
paintNewCourse("Patokosken Frisbeegolfrata");