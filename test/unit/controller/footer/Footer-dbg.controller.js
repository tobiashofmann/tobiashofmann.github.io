/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/footer/Footer.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Footer Controller");

	QUnit.test("Test onInit of Footer controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
