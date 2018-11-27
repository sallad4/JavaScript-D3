// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value (property) of the input element
  var inputValue = inputElement.property("value");

  // filter the input to find matching data in data set
  var filteredData = tableData.filter(sighting => 
      sighting.datetime === inputValue || 
      sighting.city === inputValue ||
      sighting.state === inputValue ||
      sighting.country === inputValue ||
      sighting.shape === inputValue ||
      sighting.duration === inputValue
    );

  // Make an array of filtered data
  var sightings = filteredData.map(sighting => sighting);

  renderTable(sightings);
});

// Funtion loops through the matching data and places in table
function renderTable(sightings)
 {
  var tbody = d3.select("tbody");

  sightings.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
 }

