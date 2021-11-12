/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/header/Header.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Header Controller");

	QUnit.test("Test onInit of Header controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
