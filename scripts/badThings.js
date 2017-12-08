d3 = d3version3;

// Pre-process data for radar chart
// data is list of lists (each list corresponds to category)
// elements are {axis:"Battery Life",value:0.22},

// bin into categories and counts
var categories = {};
filteredData.notWork.forEach(function(d) {
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

var margin = {top: 80, right: 80, bottom: 80, left: 80},
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

//Call function to draw the Radar chart
RadarChart("#no-work-radar", radarData, radarChartOptions);

/****  Set up table of explicit responses  ****/

// check that <tbody> element does not already exist. If so, remove.
if ($('.what-does-not-work-container .table-data') !== undefined) {
	$('.what-does-not-work-container .table-data').remove();
}

var detailTable = $('.what-does-not-work-container .response-detail .table');
var detailTableBody = detailTable.append('<tbody class="table-data"></tbody>');  // does not do what I think it does...

// add header
// TODO

// for each response, add a row
filteredData.notWorkDetail.forEach(function(resp) {
	detailTableBody.append('<tr><td>' + resp + '</td></tr>');
});

// console.log(detailTableBody);
