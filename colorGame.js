var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var guessColor = document.querySelector("#guess");
var prompt = document.querySelector("#prompt");

var state = 6; // 3 or 6;
var colors = generateColors(state);
var pickedColor = colorPicker();

easy.addEventListener("click", function(){
		prompt.textContent = "";
		h1.style.backgroundColor = "#0086b3";
		this.classList.add("selected");
		hard.classList.remove("selected");
		state = 3;
		colors = generateColors(state);
		pickedColor = colorPicker();
		guessColor.textContent = pickedColor;
		for (var i=0;i<squares.length;i++){
			if(colors[i]){
				squares[i].style.backgroundColor = colors[i];
			}else{
				squares[i].style.display = "none";
			}
		}
})

hard.addEventListener("click", function(){
		prompt.textContent = "";
		h1.style.backgroundColor = "#0086b3";
		this.classList.add("selected");
		easy.classList.remove("selected");
		state = 6;
		colors = generateColors(state);
		pickedColor = colorPicker();
		guessColor.textContent = pickedColor;
		for (var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
})

reset.addEventListener("click", function(){
	reset.textContent = "New Colors";
	h1.style.backgroundColor = "#0086b3";
	prompt.textContent = "";
	colors = generateColors(state);
	pickedColor = colorPicker();
	guessColor.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = colors[i];
	}
})

guessColor.textContent = pickedColor;


for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			prompt.textContent = "Correct!";
			changeBackground(clickedColor);
			reset.textContent = "Play Again!";
		}else{
			this.style.backgroundColor = "#232323";
			prompt.textContent = "Try Again!";
		}
	})
}

function changeBackground(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
	h1.style.backgroundColor = color;
}

function colorPicker(){
	var ranNum = Math.floor(Math.random() * colors.length);
	return colors[ranNum];
}

function generateColors(num){
	var colors = [];

	for (var i=0;i<num;i++){
		colors[i] = generateColor();
	}
	return colors;
}

function generateColor(){
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var color = "rgb("+String(red)+", "+String(green)+", "+String(blue)+")";
	return color;
}
