var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var direction = document.getElementById("direction");

console.log(direction.value);

function changeColor(){
	console.log(direction.value);
	body.style.background = "linear-gradient(" + direction.value + ", " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
};

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);

direction.addEventListener("change", changeColor);
