// disable rubberbanding
$('html').on('touchmove', function(e){
  var elem = e.originalEvent.touches[0].target;
  while (elem != null) {
    if (elem.classList.contains("scrollable")) return;
    elem = elem.parentElement;
  }
  e.preventDefault();
});

var currentView = '#view-players';
$(currentView).css('display', 'block');

var switchView = function(event) {
  if (event.data.view == "") return;
  var name = '#' + event.data.view;
  $(currentView).css('display', 'none');
  $(name).css('display', 'block');
  currentView = name;
}
