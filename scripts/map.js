d3 = d3version3;
//store the 'city' data from above
var cityData = data.city;

//filter through and find/display all the responses for each
var numBoston= cityData.filter(function(x) { return x.trim() === "Boston"; }).length;
var numPenn = cityData.filter(function(x) { return x.trim() === "Pennsylvania"; }).length;
var numNY = cityData.filter(function(x) { return x.trim() === "New York"; }).length;
var numHTX = cityData.filter(function(x) { return x.trim() === "Houston"; }).length;
var numDET = cityData.filter(function(x) { return x.trim() === "Detroit"; }).length;
var numDC = cityData.filter(function(x) { return x.trim() === "DC"; }).length;


//Code Resource: datamaps.github.io

var election = new Datamap({
  scope: 'usa',
  element: document.getElementById("map-viz-container"),
  width: 1400,
  height: 650,
  geographyConfig: {
    highlightBorderColor: '#FFC266',
    highlightFillColor: '#FFC266',
   popupTemplate: function(geography, data) {
      return '<div class="hoverinfo">' + geography.properties.name + "\n" +
      'Respondents: ' +  data.respondents + ' '
    },
    highlightBorderWidth: 3
  },

  fills: {
  'Most Respondents': '#589875',
  'Some Respondents': '#6fc496',
  'No Respondents': '#99e8bd',
  defaultFill: '#99e8bd'
},
data:{
  "AZ": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "CO": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "DE": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "FL": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "GA": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "HI": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "ID": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "IL": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "IN": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "IA": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "KS": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "KY": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "LA": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "MD": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "ME": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "MA": {
      "fillKey": "Most Respondents",
      "respondents": 31
  },
  "MN": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "MI": {
      "fillKey": "Some Respondents",
      "respondents": 5
  },
  "MS": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "MO": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "MT": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NC": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NE": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NV": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NH": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NJ": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NY": {
      "fillKey": "Some Respondents",
      "respondents": 8
  },
  "ND": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "NM": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "OH": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "OK": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "OR": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "PA": {
      "fillKey": "Some Respondents",
      "respondents": 1
  },
  "RI": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "SC": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "SD": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "TN": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "TX": {
      "fillKey": "Some Respondents",
      "respondents": 2
  },
  "UT": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "WI": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "VA": {
      "fillKey": "Some Respondents",
      "respondents": 1
  },
  "VT": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "WA": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "WV": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "WY": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "CA": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "CT": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "AK": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "AR": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  },
  "AL": {
      "fillKey": "PENDING",
      "respondents": "n/a"
  }
}
});
election.labels();
