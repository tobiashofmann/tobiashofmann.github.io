/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library de.itsfullofstars.timeline.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "de.itsfullofstars.timeline",
		version: "1.0.0",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			
		],
		interfaces: [],
		controls: [
			"de.itsfullofstars.timeline.controls.Timeline"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>ui5timeline</code>
	 *
	 * @namespace
	 * @name de.itsfullofstars.timeline
	 * @author Tobias Hofmann
	 * @alias de.itsfullofstars.timeline
	 * @version 1.0.0
	 * @public
	 */
	var thisLib = de.itsfullofstars.timeline;

	return thisLib;

});
