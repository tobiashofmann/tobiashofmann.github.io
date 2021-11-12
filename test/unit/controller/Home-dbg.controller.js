/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/Home.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Home Controller");

	QUnit.test("Test onInit of  Home controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
