/* Ryan Wahle */
/* VFW 1302   */
/* Project 2  */

function addTVShow () {
	var myTVShow = {
			showName: document.getElementById("showName").value,
			dayOfWeek: document.getElementById("dayOfWeek").value,
			time: document.getElementById("time").value,
			favorite: document.getElementById("favorite").checked,
			rating: document.getElementById("rating").value,
			startingDate: document.getElementById("startingDate").value,
			description: document.getElementById("description").value
	};
	
	var key = Math.floor(Math.random()*10000000001);
	localStorage.setItem(key, JSON.stringify(myTVShow)); //JSON.parse to get back
}

//alert(localStorage.length);
var addTVShowButton = document.getElementById("addTVShowButton");
addTVShowButton.addEventListener("click", addTVShow);
