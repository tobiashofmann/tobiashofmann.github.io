/* eslint-disable no-eval */
/*!
 * Tobias Hofmann
 * Contact: https://www.itsfullofstars.de
 */
sap.ui.define([
	"./../library", 
	"sap/ui/core/Control", 
	"./YTVideoRenderer"
], function (library, Control, YTVideoRenderer) {
	"use strict";

	/**
	 * Constructor for a new YTVideo control.
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
	 * @alias de.itsfullofstars.yt.controls.YTVideo
	 * @ui5-metamodel This control/element also will be described in the UI5 (legacy) designtime metamodel
	 */
	var YTVideo = Control.extend("de.itsfullofstars.yt.controls.YTVideo", {
		metadata: {
			library: "de.itsfullofstars.yt",
			properties: {
				"source": {
					type: "string",
					defaultValue: null
				},
				/**
				 * Show rectangular around the barcode in the image
				 */
				"title": {
					type: "string",
					defaultValue: null

				},
				"frameborder": {
					type: "sap.ui.model.type.Integer",
					defaultValue: 0
				},
				/**
				 * Width of the preview window in pixels
				 */
				"width": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "640px"
				},
				/**
				 * Height of the preview window in pixels
				 */
				"height": {
					type: "sap.ui.core.CSSSize",
					defaultValue: "480px"
				}						
			},
			events: {}
		},
		
		renderer: YTVideoRenderer,
	
    });
	return YTVideo;
}, /* bExport= */ true);
