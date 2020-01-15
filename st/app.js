var wikipediaLeft = document.getElementById('wikipedia-left'),
	wikipediaRight = document.getElementById('wikipedia-right'),
	wikipediaUserLeft = document.getElementById('wikipediaUser-left'),
	wikipediaUserRight = document.getElementById('wikipediaUser-right');


// Example 2 - Shared lists
new Sortable(wikipediaLeft, {
	group: 'shared1', // set both lists to same group
	animation: 150,
	sort: false,
	ghostClass: 'blue-background-class',
	backgroundColor: "#c00"
});

new Sortable(wikipediaRight, {
	group: 'shared1',
	animation: 150
});

// Example 2 - Shared lists
new Sortable(wikipediaUserLeft, {
	group: 'shared', // set both lists to same group
	animation: 150,
	sort: false,
	ghostClass: 'blue-background-class'
});

new Sortable(wikipediaUserRight, {
	group: 'shared',
	animation: 150
});

var buttonWikipedia = document.getElementById('add-item-wikipedia');
var resultWikipedia = document.getElementById('resultWikipedia');

buttonWikipedia.addEventListener("click", function() {
  // Store results
  var resultStoredWikipedia = resultWikipedia.value;
  // Reset value of input
  resultWikipedia.value = "";

  // Get items container
  var itemsWikipedia = document.getElementById('wikipedia-right');
  // Add items to container
  itemsWikipedia.innerHTML += "<div class='list-group-item'>" + resultStoredWikipedia + "</div>";
});


var button = document.getElementById('add-item');
var result = document.getElementById('result');

button.addEventListener("click", function() {
  // Store results
  var resultStored = result.value;
  // Reset value of input
  result.value = "";

  // Get items container
  var items = document.getElementById('wikipediaUser-right');
  // Add items to container
  items.innerHTML += "<div class='list-group-item' >" + resultStored + "</div>";
});