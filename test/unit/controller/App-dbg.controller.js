/*global QUnit*/

sap.ui.define([
	"sap/ui/base/ManagedObject",
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/Component",
	"abapconf/web/abapconf/controller/App.controller"
], function (ManagedObject, Controller, Component, AppController) {
	"use strict";


	QUnit.module("App Controller", {

		beforeEach: function() {
			this.oAppController = new AppController();

			this.oViewStub = new ManagedObject({});
			this.oViewStub.getBusyIndicatorDelay = sinon.stub();
			this.oViewStub.addStyleClass = sinon.stub();

			this.oOwnerComponent = new Component();
			this.oOwnerComponent.getContentDensityClass = sinon.stub();


			sinon.stub(Controller.prototype, "getView").returns(this.oViewStub);
			sinon.stub(Controller.prototype, "getOwnerComponent").returns(this.oOwnerComponent);
		},

		afterEach: function() {
			this.oViewStub.destroy();
		}
	});

	QUnit.test("Test onInit of About controller", function (assert) {
		this.oAppController.onInit();
		assert.ok(this.oAppController);
	});

});
