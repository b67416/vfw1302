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
		// Hide the form, hide the display data link, and show the add tv show button
		$("addTVShowForm").style.display = "none";
		$("displayDataLink").style.display = "none";
		$("addTVShowLink").style.display = "inline";
		
		// Create the new html so we can display the data
		for (var i = 0; i < localStorageLength; i++) {
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var myTVShow = JSON.parse(value);
		
			var tagTVShowList = document.createElement("ul");
			
			tagTVShowList.appendChild(createElementLI("Show Name: " + myTVShow.showName));
			tagTVShowList.appendChild(createElementLI("Day of Week: " + myTVShow.dayOfWeek));
			tagTVShowList.appendChild(createElementLI("Time: " + myTVShow.time));
			tagTVShowList.appendChild(createElementLI("Favorite: " + myTVShow.favorite));
			tagTVShowList.appendChild(createElementLI("Rating: " + myTVShow.rating));
			tagTVShowList.appendChild(createElementLI("Starting Date: " + myTVShow.startingDate));
			tagTVShowList.appendChild(createElementLI("Description: " + myTVShow.description));
			
			
			// Put it all the added HTML to the page!
			$("mainSection").appendChild(tagTVShowList);
		}
	} else {
		alert("Please add a TV Show first.");
	}
}

function createElementLI (text)
{
	var tag = document.createElement("li");
	tag.innerHTML = text;
	
	return tag;
}

//alert(localStorage.length);

// Add some event listeners
var addTVShowButton = $("addTVShowButton");
var clearStoredDataLink = $("clearStoredDataLink");
var displayDataLink = $("displayDataLink");

addTVShowButton.addEventListener("click", addTVShow);
clearStoredDataLink.addEventListener("click", clearStoredData);
displayDataLink.addEventListener("click", displayData);
