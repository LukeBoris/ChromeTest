
var ch = {
	getLinks: function(tab) {
		chrome.tabs.sendMessage(tab.id, {method: "setupPage"}, function(response) {
			//do something with response.data
			if(response.data.length > 1) {
				alert("Received response.data");
			}
			return true;
		});
	}
};

//when the browser action is clicked, test some links!
chrome.browserAction.onClicked.addListener(ch.getLinks);


//PROTOTYPE

//Link carrying object
//You'll be associating each link in the dom to its given output within this object
//General architecture will be level1: linkID; level2a: link itself; level2b: GET data

function qqaObj() {

	var linkObj = {};
	
	//this will live inside the linkObj object
	function LinkData(link, getData) {
		this.link = link;
		this.getData = getData;
	};
	
	//populate the link object
	for(var i = 0; i < linkArray.length; i++) {
		//create GET array for use
		//Q: How does the webRequest Object return data?
		//:: If it's already in array format then we can skip building this step
		var getDataArray = [];
		
		//this is the link data being loaded into the linkObj
		linkObj["qqaID" + i] = LinkData(linkArray[i], getDataArray);
		
	}
};



//http://www.adambarth.com/experimental/crx/docs/webRequest.html
//http://bocoup.com/weblog/spoofing-user-agent-with-chromes-webrequest-api/
//https://developer.chrome.com/extensions/webRequest

