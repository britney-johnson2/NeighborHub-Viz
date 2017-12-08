
// set up frequency list
var hopeData = filteredData['hope'].map(x => x.trim());
var splitHopeData = [];
hopeData.forEach(x => x.split(', ').forEach(y => splitHopeData.push(y)));
var hopeResponses = splitHopeData.filter(onlyUnique);

var cloudData = []
hopeResponses.forEach(function(resp) {
  var hopeCount = splitHopeData.filter(x => x.trim() === resp).length;
  cloudData.push({'text': resp, 'size': hopeCount});
});
// console.log(cloudData);

// Set-up word cloud
// check that word cloud does not already exist. If so, remove.
if ($('.wordcloud') !== undefined) {
	$('.wordcloud').remove();
}

var color = d3.scaleLinear()
        .domain([d3.min(cloudData, d => d.size), d3.max(cloudData, d => d.size)])
        .range(["#ddd", "#222"]);
        //.range(["#ddd", "#ccc", "#bbb", "#aaa", "#999", "#888", "#777", "#666", "#555", "#444", "#333", "#222"]);
        //.range(["#222", "#333", "#444", "#555", "#666", "#777", "#888", "#999", "#aaa", "#bbb", "#ccc", "#ddd"]);

var fontScale = d3.scaleLinear()
  .domain([d3.min(cloudData, d => d.size), d3.max(cloudData, d => d.size)])
  .range([12, 32]);

var tip = d3.tip()
  .attr('class', 'd3-tip')
  .offset([-10, 0])
  .html(function(d) {
    return "<div class='word-tip'><strong>"+ d.text + "</strong> <span>(" + d.size + ")</span></div>";
  });

d3.layout.cloud().size([800, 800])
        // .words(cloudData)
        // .rotate(0)
        // .fontSize(function(d) { return d.size; })
        // .on("end", draw)
        // .start();

        .timeInterval(20)
        .words(cloudData)
        .rotate(0)
        .spiral("archimedean")
        .fontSize(function(d) { return fontScale(d.size); })
        .text(function(d) { return d.text; })
        //.rotate(function() { return ~~(Math.random() * 2) * 90; })
        //.font("Impact")
        .on("end", draw)
        .start();

function draw(words) {
  d3.select("#hope-cloud").append("svg")
    .attr("width", 800)
    .attr("height", 800)
    .attr("class", "wordcloud")
    .append("g")
    // without the transform, words would get cutoff to the left and top, they would
    // appear outside of the SVG area
    .attr("transform", "translate(250, 300)")
    .call(tip)
    .selectAll("text")
    .data(words)
    .enter().append("text")
    .style("font-size", function(d) { return fontScale(d.size) + "px"; })
    .style("fill", function(d, i) { return color(i); })
    .attr("transform", function(d) {
        return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    })
    .text(function(d) { return d.text; })
    .on('mouseover', tip.show)
    .on('mouseout', tip.hide);
}


/****  Set up table of explicit responses  ****/

// check that <tbody> element does not already exist. If so, remove.
if ($('.hope-container .table-data') !== undefined) {
	$('.hope-container .table-data').remove();
}

var detailTable = $('.hope-container .response-detail .table');
var detailTableBody = detailTable.append('<tbody class="table-data"></tbody>');  // does not do what I think it does...

// add header
// TODO

// for each response, add a row
filteredData.hopeDetail.forEach(function(resp) {
	detailTableBody.append('<tr><td>' + resp + '</td></tr>');
});

// console.log(detailTableBody);
