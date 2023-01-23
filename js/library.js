function gid(id) {
	return document.getElementById(id);
}

function getclass(className) {
	return document.getElementsByClassName(className);
}

function createElement(tag, className, parent) {                                                               
	var element = document.createElement(tag);
	element.className = className;
	parent.appendChild(element);
	return element;
} 

