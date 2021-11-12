/*global QUnit*/

sap.ui.define([
	"abapconf/web/abapconf/controller/agenda/Agenda.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Agenda Controller");

	QUnit.test("Test onInit of Agenda controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
