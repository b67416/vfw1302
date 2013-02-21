/* Ryan Wahle */
/* VFW 1302   */
/* Project 3  */

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
	
	// Tell the user we saved some data and reload blank page
	alert("Thank you for adding a TV Show");
	window.location.reload();
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
			
			tagTVShowList.appendChild(createDeleteLink("Delete TV Show", key));
			tagTVShowList.appendChild(createEditLink("Edit TV Show", key));				
			
			
			// Put it all the added HTML to the page!
			$("mainSection").appendChild(tagTVShowList);
		}
	} else {
		alert("Please add a TV Show first.");
	}
}

function deleteTVShow ()
{
	var deleteConfirmation = confirm("Are you sure you want to delete that TV Show?");
	
	if (deleteConfirmation) {
		localStorage.removeItem(this.key);
		window.location.reload();
	}
}

function createEditLink (text, key)
{

}

function createDeleteLink (text, key)
{
	var tag = document.createElement("a");
	tag.innerHTML = text;
	tag.href = "#";
	tag.key = key;	
	tag.addEventListener("click", deleteTVShow);
	return tag;
}

function createElementLI (text)
{
	var tag = document.createElement("li");
	tag.innerHTML = text;
	
	return tag;
}

function addDaysOfWeekSelectTag ()
{
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
	var selectionLabel = $("dayOfWeekSelection");
	var selectTag = document.createElement("select");
	selectTag.setAttribute("id", "dayOfWeek");
	
	for (var i = 0; i < daysOfWeek.length; i++) {
		var optionTag = document.createElement("option");
		optionTag.value = daysOfWeek[i];
		optionTag.innerHTML = daysOfWeek[i];
		selectTag.appendChild(optionTag);
	}
	
	selectionLabel.appendChild(selectTag);
	
}


// This is our starting point (after the DOM loads)
function DOMLoaded ()
{
	// Add our select tag
	addDaysOfWeekSelectTag();

	// Add some event listeners
	var addTVShowButton = $("addTVShowButton");
	var clearStoredDataLink = $("clearStoredDataLink");
	var displayDataLink = $("displayDataLink");

	addTVShowButton.addEventListener("click", addTVShow);
	clearStoredDataLink.addEventListener("click", clearStoredData);
	displayDataLink.addEventListener("click", displayData);
}

window.addEventListener("DOMContentLoaded", DOMLoaded);

