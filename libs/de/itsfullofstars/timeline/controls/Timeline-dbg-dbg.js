/*!
 * ${copyright}
 */

// Provides control de.itsfullofstars.timeline.Timeline.
sap.ui.define([
	"../library", 
	"sap/ui/core/Control", 
	"./TimelineRenderer"
], function (library, Control, TimelineRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>de.itsfullofstars.timeline.Timeline</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Tobias Hofmann
	 * @version 1.0.0
	 *
	 * @constructor
	 * @public
	 * @alias de.itsfullofstars.timeline.Timeline
	 */
	var Timeline = Control.extend("de.itsfullofstars.timeline.controls.Timeline", /** @lends de.itsfullofstars.timeline.Timeline.prototype */ {
		metadata: {
			library: "de.itsfullofstars.timeline",
			properties: {
				title: {
					type: "string",
					defaultValue: "History"
				},
				width: {
					type: "sap.ui.core.CSSSize",
					defaultValue: "1500px"
				}			
			},
			aggregations: {
				items: {singularName: "item"} 
			},
			defaultAggregation: "items"
		},

		renderer: TimelineRenderer,
		
		onclick: function() {
			this.firePress();
		}
	});
	return Timeline;

});
