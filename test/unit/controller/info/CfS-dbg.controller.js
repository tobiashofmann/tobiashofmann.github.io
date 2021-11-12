/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/CfS.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Call for Speaker Controller");

	QUnit.test("Test onInit of CfS controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
