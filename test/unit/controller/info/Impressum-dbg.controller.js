/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/Impressum.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Impressum Controller");

	QUnit.test("Test onInit of Impressum controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
