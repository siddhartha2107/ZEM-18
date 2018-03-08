$('.button-collapse').sideNav({
  menuWidth: 250, 
  edge: 'left', 
  closeOnClick: true,
  draggable: true,
});

$(document).ready(function(){
	$('ul.tabs').tabs({ 'swipeable': true });
});