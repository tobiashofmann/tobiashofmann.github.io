/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/Manifesto.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Manifesto Controller");

	QUnit.test("Test onInit of Manifesto controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
