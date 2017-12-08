d3 = d3version3;
// bin into categories and counts
var categories = {};
filteredData.mayor.forEach(function(d) {
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

var radarData = [[]]
Object.keys(categories).forEach(function(c) {
	radarData[0].push({axis: c, value: categories[c] / totalVotes});
});

// var barData = []
// Object.keys(categories).forEach(function(c) {
// 	barData.push({id: c, x: c, y: categories[c]});
// });
// console.log(barData);

// var visualization = new d3plus.BarChart()
// 	.data(barData)
//   //.barPadding(0)
//   .render();

var margin = {top: 80, right: 80, bottom: 80, left: 80},
				width = Math.min(500, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

var color = d3.scale.ordinal()
							.range(["#EDC951","#CC333F","#00A0B0"]);

var radarChartOptions = {
  w: width,
  h: height,
  margin: margin,
  maxValue: 0.15,
  levels: 3,
  roundStrokes: true,
  color: color
};

//Call function to draw the Radar chart
// TODO: something weird happening here...
RadarChart("#mayor-radar", radarData, radarChartOptions);


/****  Set up table of explicit responses  ****/

// check that <tbody> element does not already exist. If so, remove.
if ($('.mayor-container .table-data') !== undefined) {
	$('.mayor-container .table-data').remove();
}

var detailTable = $('.mayor-container .response-detail .table');
var detailTableBody = detailTable.append('<tbody class="table-data"></tbody>');  // does not do what I think it does...

// add header
// TODO

// for each response, add a row
filteredData.mayorDetail.forEach(function(resp) {
	detailTableBody.append('<tr><td>' + resp + '</td></tr>');
});

// console.log(detailTableBody);
