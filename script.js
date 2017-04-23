var inputx = prompt('How big do you want the canvas to be? (Please enter a value from 16 - 100)');
while (inputx < 16 || inputx > 100) {
  inputx = prompt('That was not a valid size, please enter a value from 16 - 100');
}
var inputy = inputx;

dim = inputx * 10;

function changewidth() {
  document.getElementById("container").style.height = dim + 'px';
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

  var color = ['blue', 'red', 'green', 'erase'];
  color = color[0];

  $("#bluebtn").click(function() {
    color = 'blue';

  });
  $("#redbtn").click(function() {
    color = 'red';

  });
  $("#greenbtn").click(function() {
    color = 'green';

  });
  $("#erase").click(function() {
    color = 'erase';

  });

$("#resetbtn").click(function() {
  	location.reload();
	});

  mouseIsPressed = false;
  $('.unit').mousedown(function() {
    mouseIsPressed = true;
  });
  $('.unit').mouseup(function() {
    mouseIsPressed = false;
  });

  $('.unit').mouseover(function() {
    if (mouseIsPressed) {
      if (color === 'blue') {
        $(this).removeClass().addClass('newunitblue')
      } else if (color === 'red') {
        $(this).removeClass().addClass('newunitred')
      } else if (color === 'green') {
        $(this).removeClass().addClass('newunitgreen')
      } else if (color === 'erase') {
        $(this).removeClass().addClass('newuniterase')
      }
    }

  });


});
