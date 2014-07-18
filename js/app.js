var players = ["Aku", "Wöffi", "Jozpe", "Sanqu"];
var courses = [
  {
    name: "Lausteen frisbeegolfpuisto",
    city: "Turku",
    pars: [3,3,3,3,3,4,3,4,4,3,4,3,3,3,4,4,3,3,4,3,3,3,3]
  },{
    name: "Urheilupuisto",
    city: "Turku",
    pars: [3,3,3,3,3,3,3,3,3]
  },{
    name: "Patokosken Frisbeegolfrata",
    city: "Rovaniemi",
    pars: [3,3,3,3,3,3,3,3,3]
  }
];
var game = {
  players: null,
  course: null
};

// disable rubberbanding
$('html').on('touchmove', function(e){
  var elem = e.originalEvent.touches[0].target;
  while (elem != null) {
    if (elem.classList.contains("scrollable")) return;
    elem = elem.parentElement;
  }
  e.preventDefault();
});

// enable fastclick
FastClick.attach(document.body);

var currentView = '#view-players';
$(currentView).css('display', 'block');

var switchView = function(view) {
  if (view == "") return;
  var name = '#' + view;
  $(currentView).css('display', 'none');
  $(name).css('display', 'block');
  currentView = name;
}

$( document ).ready(function() {
  initPlayerView();
});