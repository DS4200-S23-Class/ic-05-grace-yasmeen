// javascript file for ic-05

// initiallize count
var count = 0; 

//button function
function buttonClicked()
{
	console.log("button was clicked");

	count +=1; 

	let newText = "Button was clicked";
	console.log(count);

	//select the element we want to modify
	let buttonDiv = document.getElementById("button-div");

	
	buttonDiv.innerHTML = "Number of times button clicked:" + count;

}

