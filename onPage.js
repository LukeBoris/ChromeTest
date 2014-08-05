//code to be injected on page
var allLinks = document.getElementsByTagName("a");

//create methods for the comHandler.js file to work with
var methods = {
	//logic for mousedown event to change color of border
	linkChecked: function(a) {
		if(a.style.borderColor == "red") {
			a.style.borderColor = "green";	
		} else {
			a.style.borderColor = "red";
		}
	},
	//setup the page
	setupPage: function() {
		var links = allLinks;
		for(var i = 0; i < links.length; i++) {
				links[i].style.border = "dashed";
				links[i].style.borderColor = "red";
				links[i].setAttribute("data-qqaID", i);
				links[i].setAttribute("onmousedown", "methods.linkChecked(this)");
		}
		return links;
	}
};

//Listen for messages from extension
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	
	var data = {};
	
	if(methods.hasOwnProperty(request.method)) {
		data = methods[request.method]();
	}
	//send our response back
	sendResponse({data: data});
	return true;
});
