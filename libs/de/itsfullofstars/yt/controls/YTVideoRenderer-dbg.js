/*!
 * Tobias Hofmann
 * Contact: https://www.itsfullofstars.de
 */

sap.ui.define([],

	function () {
		"use strict";

		/**
		 * YTVideo renderer.
		 * @namespace
		 */
		var YTVideoRenderer = {
			"apiVersion": 2
		};
		
		/**
		 * Renders the HTML for the given control, using the provided
		 * {@link sap.ui.core.RenderManager}.
		 *
		 * @param {sap.ui.core.RenderManager} oRm
		 *            the RenderManager that can be used for writing to
		 *            the Render-Output-Buffer
		 * @param {sap.ui.core.Control} oControl
		 *            the control to be rendered
		 */
         YTVideoRenderer.render = function (oRm, oControl) {
			
			oRm.openStart("div", oControl).style("width", "100%").style("height", "100%").openEnd();
			
                oRm.write(
                    "<iframe width='%w' height='%h' src='%s' title='%t' frameborder='%f' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
                    .replace("%w", oControl.getWidth())
                    .replace("%h", oControl.getHeight())
                    .replace("%s", oControl.getSource())
                    .replace("%t", oControl.getTitle())
                    .replace("%f", oControl.getFrameborder())
                );
			
            oRm.write("</div>");
		};

		return YTVideoRenderer;

	}, /* bExport= */ true);
