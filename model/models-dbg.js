sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},


		createSessionDetailModel: function(oData) {
			var oModel = new JSONModel(oData);
			return oModel;
		},


		createAgendaViewModel: function() {
			var oData = {
				showTrack1: true,
				showTrack2: true,
				showTrack3: true,
				showEnglish: false,
				showGerman: false
			};
			var oModel = new JSONModel(oData);
			return oModel;
		},


		createFooterViewModel: function() {
			var oModel = new JSONModel({
				"showCookieNotice": true
			});
			return oModel;
		}

	};
});