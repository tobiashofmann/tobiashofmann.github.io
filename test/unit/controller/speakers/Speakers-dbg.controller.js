/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/speakers/Speakers.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Speakers Controller");

	QUnit.test("Test onInit of Speakers controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
