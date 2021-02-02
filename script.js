var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");
var deleteButton = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newli = document.createElement("li");
	newli.appendChild(document.createTextNode(input.value));
	var newbutton = document.createElement("button");
	newbutton.appendChild(document.createTextNode("Delete"));
	newbutton.classList.add("delete");
	newli.appendChild(newbutton);
	newbutton.addEventListener("click", function() {
		newbutton.parentElement.remove();
	})
	ul.appendChild(newli);
	newli.addEventListener("click", function() {
			newli.classList.toggle("done");
	})
	input.value = "";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function InitialListeners() {
	li.forEach(function(item) {
		item.addEventListener("click", function() {
			item.classList.toggle("done");
		})
	})
	Array.from(deleteButton).forEach(function(item) {
		item.addEventListener("click", function() {
			item.parentElement.remove();
		})
	})

}

InitialListeners();

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


