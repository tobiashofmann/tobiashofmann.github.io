/*!
 * Tobias Hofmann
 * Contact: https://www.itsfullofstars.de
 */

/**
 * Initialization Code and shared classes of library de.itsfullofstars.yt.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * YT
		 *
		 * @namespace
		 * @name de.itsfullofstars.yt
		 * @author Tobias Hofmann
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "de.itsfullofstars.yt",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [
				"de.itsfullofstars.barcodescanner.controls.YTVideo"
			],
			elements: []
		});

		/* eslint-disable */
		return de.itsfullofstars.yt;
		/* eslint-enable */

	}, /* bExport= */ false);
