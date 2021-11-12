/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/info/Coc.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Code of Conduct Controller");

	QUnit.test("Test onInit of Coc controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
