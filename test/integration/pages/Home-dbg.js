sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press",
	"sap/ui/model/resource/ResourceModel"
], function (Opa5, Press, ResourceModel) {
	"use strict";
	var sViewName = "Home";

	Opa5.createPageObjects({
		onTheHomePage: {

			actions: {
				iClickOnAboutInHeader: function() {
					return this.waitFor({
						id: "navAbout",
						viewName: "header.Header",
						actions: new Press(),
						errorMessage: "did not find the button About"
					});
				},

				iClickOnAgendaInHeader: function() {
					return this.waitFor({
						id: "navAgenda",
						viewName: "header.Header",
						actions: new Press(),
						errorMessage: "did not find the button Agenda"
					});
				}
			},


			assertions: {

				iShouldSeeTheHomeView: function () {
					return this.waitFor({
						id: "home",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The " + sViewName + " view is displayed");
						},
						errorMessage: "Did not find the " + sViewName + " view"
					});
				},

				iAssertTheUIStateOfMenuAgenda: function () {

					this.oResourceBundle = new ResourceModel({
						bundleUrl: jQuery.sap.getModulePath("abapconf/web/abapconf/", "/i18n/i18n.properties")
					}).getResourceBundle();

					this.waitFor({
						id: "navAgenda",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.ok(oControl.getVisible());
						}
					});

					this.waitFor({
						id: "navAgenda",
						controlType: "sap.m.Button",
						viewName: "header.Header", 
						properties: {
							text: "Agenda"
						}
					});

					this.waitFor({
						id: "navAgenda",
						controlType: "sap.m.Button",
						viewName: "header.Header",
						properties: {
							text: "Agenda"
						},
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.strictEqual(oControl.getText(), this.oResourceBundle.getText("headerNavAgenda"));
						}.bind(this)

						

					});
				},

				iAssertTheUIStateOfMenuAbout: function () {

					this.oResourceBundle = new ResourceModel({
						bundleUrl: jQuery.sap.getModulePath("abapconf/web/abapconf/", "/i18n/i18n.properties")
					}).getResourceBundle();

					this.waitFor({
						id: "navAbout",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.strictEqual(oControl.getText(), this.oResourceBundle.getText("headerNavAbout"));
						}.bind(this)
					});
	
					this.waitFor({
						id: "navAbout",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.ok(oControl.getEnabled());
						}
					});
	
					this.waitFor({
						id: "navAbout",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.ok(oControl.getVisible());
						}
					});
				},


				iAssertTheUIStateOfMenuSpeakers: function () {

					this.oResourceBundle = new ResourceModel({
						bundleUrl: jQuery.sap.getModulePath("abapconf/web/abapconf/", "/i18n/i18n.properties")
					}).getResourceBundle();

					this.waitFor({
						id: "navSpeakers",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.strictEqual(oControl.getText(), this.oResourceBundle.getText("headerNavSpeakers"));
						}.bind(this)
					});
	
					this.waitFor({
						id: "navSpeakers",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.ok(oControl.getEnabled());
						}
					});
	
					this.waitFor({
						id: "navSpeakers",
						viewName: "header.Header",
						success: function (vControls) {
							var oControl = vControls[0] || vControls;
							Opa5.assert.ok(oControl.getVisible());
						}
					});
				}
			}
		}
	});

});
