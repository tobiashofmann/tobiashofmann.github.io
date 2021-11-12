sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/model/resource/ResourceModel"
], function (Opa5, Press, ResourceModel) {
	"use strict";
	var sViewName = "agenda.Agenda";

	Opa5.createPageObjects({
		onTheAgendaPage: {

			actions: {
				
			},


			assertions: {

				iShouldSeeTheAgendaView: function () {
					return this.waitFor({
						id: "agenda",
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
