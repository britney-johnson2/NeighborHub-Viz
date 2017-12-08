
var voteData = voteFiltered;

console.log('vote!');
console.log(voteData);

//filter through and find/display all the responses for each
var numYes = voteData.filter(function(x) { return x.trim() === "Yes"; }).length;
var numNo = voteData.filter(function(x) { return x.trim() === "No"; }).length;
var numUnsure = voteData.filter(function(x) { return x.trim() === "Unsure"; }).length;
var numNone = voteData.filter(function(x) { return x.trim() === "None"; }).length;

//data for the pie chart
var pieData = [];
pieData.push({
  label: "Yes",
  count: numYes
});

pieData.push({
  label: "No",
  count: numNo
});

pieData.push({
  label: "Unsure",
  count: numUnsure
});

pieData.push({
  label: "None",
  count: numNone
});

var maxCount = d3.max(pieData, d => d.count);

//Code resource: https://github.com/kthotav/D3Visualizations/tree/master/Pie_Charts

//margins and radius of circle
var margin = {top:20, right:20, bottom: 20, left: 20},
  width = 500 - margin.right - margin.left,
  height = 500 - margin.top - margin.bottom
  radius = width/2;

//color function (for range of colors to apply to pie chart)
var pieColor = d3.scaleOrdinal()
  .range(["#FFC266", "#FFCC80", "#FFD699", "#FFE0B3", "#FFEBCC"]);

//for the pie arc
var arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

var labelArc = d3.arc()
  .outerRadius(radius - 50)
  .innerRadius(radius - 50)

//create the pie chart
var pie = d3.pie()
  .sort(null) //do not sort any values
  .value(function(d) {return d.count; }); //**returns the value in data

//svg
console.log('test');
d3.select("#vote-viz").select("svg").remove();

var svg = d3.select("#vote-viz").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width/2 + "," + height/2 + ")");

//g elements for arc are appended
var g = svg.selectAll(".arc")
  .data(pie(pieData)) //importing data
  .enter().append("g")
  .attr("class","arc")
  .on("mouseover", function() {
    d3.select(this)
      .style("opacity", 0.9)
      .select("text")
      .style("fill", "gray");})
  .on("mouseout", function() {
    d3.select(this)
      .style("opacity", 1.0)
      .select("text")
      .style("fill", "white")});

//arc's path appended
g.append("path")
  .attr("d", arc)
  .style("fill",function(d) {return pieColor(d.data.label);})
  .transition()
  .ease(d3.easeLinear)
  .duration(1000) //speed of transition
  .attrTween ("d", pieAnimate);


//append text
g.append("text")
  .transition()
  .ease(d3.easeLinear)
  .duration(1000)
  .attr("transform", function(d){
    return "translate(" + labelArc.centroid(d) +")"; })
  .attr("dy", ".35em")
  .style('fill', 'white')
  .style('font-size', '24px')
  .style('text-anchor', 'middle')
  .text(function(d) {
    if (d.data.count / maxCount > 0.05) {
      return d.data.label;
    }
  });

//pie animation
function pieAnimate(b){
  b.innerRadius = 0;
  var i = d3.interpolate({startAngle: 0, endAngle: 0}, b); //will start at zero and end at zero
  return function(t){
    return arc (i(t));};
  }
