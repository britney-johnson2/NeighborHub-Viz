
// Add questions to dropdown
$('.vote-container .select-question').append('<option value="all">All Responses</option>');
Object.keys(questions).forEach(function(q) {
	var option = '<option value="'+ q + '">' + q + '</option>';
	$('.vote-container .select-question').append(option);
});

// set up filter button behavior
var onVoteFilterClick = function(e) {
	var selectedQuestion = $('#selected-ques')[0].selectedOptions[0].innerText;
	console.log('vote filter click');
	console.log($('#selected-ques'));
	console.log(selectedQuestion);
	if (selectedQuestion !== 'All Responses') {
		var dataKey = questions[selectedQuestion];
	  // determine which checkboxes were selected
		var checkboxes = $('#vote-checkbox-container').find('input').toArray()
												.filter(x => x.checked)
												.map(x => x.id);
	  // filter on each attribute
		var selectedIndices = []
		checkboxes.forEach(function(checked) {
			filteredData[dataKey].forEach(function(resp, idx) {
				if (resp === checked) {
					selectedIndices.push(idx);
				}
			});
		});
	  // grab indices that match criteria
		console.log('vote filter!');
	  voteFiltered = filteredData['vote'].filter(function(d, idx) { return selectedIndices.includes(idx); });
	} else {
		// don't filter
		voteFiltered = filteredData['vote'];
	}
	console.log('question filter!');
	console.log(voteFiltered);
	reloadVoteViz();
};

// Add appropriate checkboxes dynamically
var onSelectChanged = function(e) {
	var selectedQuestion = e.target.selectedOptions[0].innerText;
	console.log('vote filter on: ' + selectedQuestion);

  // remove any lingering elements...
  $('#vote-checkbox-container').children().remove();

	if (selectedQuestion !== 'All Responses') {
		// get all possible responses of questions
    var dataKey = questions[selectedQuestion];
    var responses = filteredData[dataKey].filter(onlyUnique);
    responses.forEach(function(resp, idx) {
      // add checkbox
			if (idx < 5) {
				var checkbox = '<input id="' + resp + '" type="radio" name="label" class="fixedWidth">';
			} else {
				var checkbox = '<input id="' + resp + '" type="radio" name="label" class="width">';
			}
      $('#vote-checkbox-container').append(checkbox);
			$('#vote-checkbox-container').append('<label class="label">'+resp+'</label>');
    });
  } else {
    // do nothing
  }
};

$('.vote-container .select-question').on('change', onSelectChanged);
$('#vote-question-filter-btn').on('click', onVoteFilterClick);
