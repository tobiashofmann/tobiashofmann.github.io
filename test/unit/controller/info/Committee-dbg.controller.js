/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/Committee.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Committee Controller");

	QUnit.test("Test onInit of Committee controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
