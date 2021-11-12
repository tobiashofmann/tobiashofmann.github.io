/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Home"
], function (opaTest) {
	"use strict";

	QUnit.module("Homepage Journey");

	opaTest("Should see the initial page of the app", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHomePage.iShouldSeeTheHomeView();

		//Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Validate About navigation in header", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHomePage.iAssertTheUIStateOfMenuAbout();

		//Cleanup
		Then.iTeardownMyApp();
	});


	opaTest("Validate Agenda navigation in header", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHomePage.iAssertTheUIStateOfMenuAgenda();

		//Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Validate Speakers navigation in header", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// Assertions
		Then.onTheHomePage.iAssertTheUIStateOfMenuSpeakers();

		//Cleanup
		Then.iTeardownMyApp();
	});

});
