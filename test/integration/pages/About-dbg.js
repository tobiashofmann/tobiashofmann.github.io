sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/model/resource/ResourceModel"
], function (Opa5, Press, ResourceModel) {
	"use strict";
	var sViewName = "About";

	Opa5.createPageObjects({
		onTheAboutPage: {

			actions: {
				
			},


			assertions: {

				iShouldSeeTheAboutView: function () {
					return this.waitFor({
						id: "about",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				}
				
			}
		}
	});

});
