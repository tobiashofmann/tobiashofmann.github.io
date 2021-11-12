/*global QUnit*/

sap.ui.define([
	"sap/ui/test/opaQunit",
	"./pages/Home",
	"./pages/About",
	"./pages/Agenda"
], function (opaTest) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaTest("Navigate from Home to About", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// action
		When.onTheHomePage.iClickOnAboutInHeader();

		// Assertions
		Then.onTheAboutPage.iShouldSeeTheAboutView();


		//Cleanup
		Then.iTeardownMyApp();
	});

	opaTest("Navigate from Home to Agenda", function (Given, When, Then) {
		// Arrangements
		Given.iStartMyApp();

		// action
		When.onTheHomePage.iClickOnAgendaInHeader();

		// Assertions
		Then.onTheAgendaPage.iShouldSeeTheAgendaView();


		//Cleanup
		Then.iTeardownMyApp();
	});
	
});
