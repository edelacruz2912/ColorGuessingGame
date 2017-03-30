var boxes = document.querySelectorAll(".box");
var red;
var green;
var blue;
var colors = [];

// generateColors for the boxes

function colorGenerator(difficulty){

	colors = [];
	for (var i = 0; i < difficulty; i++) {
		red = Math.floor((Math.random() * 256) + 1);
		green = Math.floor((Math.random() * 256) + 1);
		blue = Math.floor((Math.random() * 256) + 1);
		colors.push("rgb"+ "(" + red +","+ green + "," + blue + ")") ;
		boxes[i].style.background = colors[i];
	}; 

}















