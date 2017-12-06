// Pre-process data for radar chart
// data is list of lists (each list corresponds to category)
// elements are {axis:"Battery Life",value:0.22},

// bin into categories and counts
var categories = {};
data.whatWorks.forEach(function(d) {
	responses = d.split(', ')
	// console.log(responses);
	responses.forEach(function(resp) {
		resp = resp.trim()
		if (!categories.hasOwnProperty(resp)) {
			categories[resp] = 1;
		} else {
			categories[resp]++;
		}
	});
});

var totalVotes = 0;
Object.keys(categories).forEach(function(c) {
	totalVotes += categories[c];
});
console.log(categories);
console.log(totalVotes);

var radarData = [[]]
Object.keys(categories).forEach(function(c) {
	radarData[0].push({axis: c, value: categories[c] / totalVotes});
});

console.log(radarData);

var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

var color = d3.scale.ordinal()
							.range(["#EDC951","#CC333F","#00A0B0"]);
				
var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0.3,
  levels: 4,
  roundStrokes: true,
  color: color
};

// call function to draw the Radar chart
RadarChart("#good-viz-container .radarChart", radarData, radarChartOptions);


// Chord Graph
// var chord = d3.chord();


/****  Set up table of explicit responses  ****/

var detailTable = $('.what-works-container .response-detail .table');
var detailTableBody = detailTable.append('<tbody></tbody>');

// add header
// TODO

// for each response, add a row
data.whatWorksDetail.forEach(function(resp) {
	detailTableBody.append('<tr><td>' + resp + '</td></tr>');
});