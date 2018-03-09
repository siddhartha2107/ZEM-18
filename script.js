$('.button-collapse').sideNav({
  edge: 'left', 
  closeOnClick: true,
  draggable: true,
});

$(document).ready(function(){
	$('ul.tabs').tabs({ 'swipeable': true });
});
$(document).ready(function(){
    $('.modal').modal();
  });