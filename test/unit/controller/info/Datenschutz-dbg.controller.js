/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/Datenschutz.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Datenschutz Controller");

	QUnit.test("Test onInit of Datenschutz controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
