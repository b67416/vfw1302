/* Ryan Wahle */
/* VFW 1302   */
/* Project 2  */

function $ (element)
{
	return document.getElementById(element);
}

function addTVShow ()
{
	var myTVShow = {
			showName: $("showName").value,
			dayOfWeek: $("dayOfWeek").value,
			time: $("time").value,
			favorite: $("favorite").checked,
			rating: $("rating").value,
			startingDate: $("startingDate").value,
			description: $("description").value
	};
	
	var key = Math.floor(Math.random()*10000000001);
	localStorage.setItem(key, JSON.stringify(myTVShow));
}

function clearStoredData ()
{
	if (localStorage.length === 0) {
		alert("There is no data to clear!");
	} else {
		var clearStoredDataConfirmation = confirm("Are you sure you want to clear all the data?");
		
		if (clearStoredDataConfirmation) {
			localStorage.clear();
			window.location.reload();
		}
	}
}

function displayData ()
{
	var localStorageLength = localStorage.length;
	
	if (localStorageLength > 0) {
		for (var i = 0; i < localStorageLength; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var myTVShow = JSON.parse(value);
		
			var tagTVShowData = document.createElement("p");
			tagTVShowData.innerHTML = myTVShow.showName;
			
			$("mainSection").appendChild(tagTVShowData);
			
		}
	} else {
		alert("Please add a TV Show first.");
	}
}

//alert(localStorage.length);

// Add some event listeners
var addTVShowButton = $("addTVShowButton");
var clearStoredDataLink = $("clearStoredDataLink");
var displayDataLink = $("displayDataLink");

addTVShowButton.addEventListener("click", addTVShow);
clearStoredDataLink.addEventListener("click", clearStoredData);
displayDataLink.addEventListener("click", displayData);

