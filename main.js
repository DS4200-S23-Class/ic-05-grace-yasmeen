// javascript file for ic-05

//button function
function buttonClicked(){
	console.log("button was clicked");

	let newText = "Button was clicked";

	//select the element we want to modify
	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newText;
}

