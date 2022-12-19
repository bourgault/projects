
console.log(document.getElementById("title"));
console.log(document instanceof HTMLElement);

function sayHello (event) {
	//console.log(this);
	this.textContent = "YOU SAID IT";
	var name =
		document.getElementById("name").value;
		var message = "<h2>Hello " + name +"!</h2>";

	// document
	// 	.getElementById("content")
	// 	.textContent = message;

	document
		.getElementById("content")
		.innerHTML = message;	

	if (name === "student") {
		var title = 
		document
			.querySelector("#title")
			.textContent;
		title += " & more text in it !";
		document
			.querySelector("#title")
			.textContent = title;
	}	
	// querySelector affect the 1st one id
	// querySelectorAll affects all of this id


}

//document.querySelector("button")
//		.addEventListener("click", sayHello);

document.querySelector("button")
	.onclick = sayHello;		