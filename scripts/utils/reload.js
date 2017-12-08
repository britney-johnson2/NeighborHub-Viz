var reloadViz = function() {
	var docHeadObj = document.getElementsByTagName("body")[0];
	var scriptNames = ['goodThings.js', 'badThings.js', 'mayor.js', 'hope.js', /*'questionFilter.js'*/, 'vote.js'];

	scriptNames.forEach(function(scriptName) {
		var dynamicScript = document.createElement("script");
		dynamicScript.type = "text/javascript";
		dynamicScript.src = "scripts/" + scriptName;
		docHeadObj.appendChild(dynamicScript);
		// remove old script...?
	});
};

var reloadVoteViz = function() {
	var docHeadObj = document.getElementsByTagName("body")[0];
	var dynamicScript = document.createElement("script");
	dynamicScript.type = "text/javascript";
	dynamicScript.src = "scripts/vote.js";
	docHeadObj.appendChild(dynamicScript);
	// remove old script...?
}
