var reloadViz = function() {
	var docHeadObj = document.getElementsByTagName("body")[0];
	var scriptNames = ['goodThings.js', 'badThings.js', 'mayor.js'];

	scriptNames.forEach(function(scriptName) {
		var dynamicScript = document.createElement("script");
		dynamicScript.type = "text/javascript";
		dynamicScript.src = "scripts/" + scriptName;
		docHeadObj.appendChild(dynamicScript);
		// remove old script...?
	});
};
