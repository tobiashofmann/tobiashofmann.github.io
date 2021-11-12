sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./HomepageJourney",
	"./NavigationJourney"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Startup(),
		viewNamespace: "abapconf.web.abapconf.view.",
		autoWait: true
	});
});
