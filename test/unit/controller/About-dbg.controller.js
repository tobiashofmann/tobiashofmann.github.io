/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/About.controller"
], function (Controller) {
	"use strict";

	QUnit.module("About Controller");

	QUnit.test("Test onInit of About controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
