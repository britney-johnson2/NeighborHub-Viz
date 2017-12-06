
var filterMenu = $('.filter-menu').append('<select class="select-city"></select>');

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var cities = data['city'].map(x => x.trim());
cities = cities.filter(onlyUnique);
// console.log(cities);

$('.filter-menu .select-city').append('<option value="all">All</option>');

cities.forEach(function(c) {
	var option = '<option value="'+ c + '">' + c + '</option>';
	$('.filter-menu .select-city').append(option);
});


// how to filter:
//	get indices of city where element==selected city, filter all data to only select those indices
var onSelectChanged = function(e) {
	var selectedCity = e.target.selectedOptions[0].innerText;
	console.log('filter on: ' + selectedCity);
	if (selectedCity !== 'All') {
		// get indices of responses from selected city
		var selectedIndices = [];
		data['city'].forEach(function(c, idx) {
			if (c === selectedCity)
				selectedIndices.push(idx);
		});
		// console.log(selectedIndices);
		filteredData = {}; // re-assign global variable filteredData
		Object.keys(data).forEach(function(key) {
			filteredData[key] = data[key].filter(function(d, idx) { return selectedIndices.includes(idx); });
		});
		// console.log(filteredData);
	} else {
		filteredData = data;
	}
	
	reloadViz();
};

$('.filter-menu .select-city').on('change', onSelectChanged);
