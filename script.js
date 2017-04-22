var inputx = prompt('How big do you want the canvas to be? (Please enter a value from 16 - 100)');
while (inputx < 16 ||inputx > 100) {
  inputx = prompt('That was not a valid size, please enter a value from 16 - 100');
}
var inputy = inputx;

dim = inputx * 10;

function changewidth() {
document.getElementById("container").style.height = dim +'px';
    document.getElementById("container").style.width = dim + 'px';
}



$(document).ready(function() {

 changewidth();

  for (var x = 0; x < inputx; x++) {
    for (var y = 0; y < inputy; y++) {
      var unit = $("<div class='unit'></div>");
      unit.appendTo('#container');
    }
  }
  mouseIsPressed = false;
  $('.unit').mousedown(function() {
  	mouseIsPressed = true;
  });
  $('.unit').mouseup(function() {
  mouseIsPressed = false;
  })
  $('.unit').mouseover(function() {
  if (mouseIsPressed) {
  	$(this).removeClass().addClass('newunit')
  }

});
});
