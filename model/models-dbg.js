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

		createHeaderViewModel: function() {
			var oData = {
				day: 0,
				hour: 0,
				minute: 0,
				second: 0,
				live: false
			};
			var oModel = new JSONModel(oData);
			return oModel;
		},

		createSessionDetailModel: function(oDataAgenda, oDataSpeaker) {
			oDataAgenda.info = oDataSpeaker;
			var oModel = new JSONModel(oDataAgenda);
			return oModel;
		},


		createAgendaViewModel: function() {

			// check if device is phone to set visible mode correctly for agenda table with Channel 1 and 2
			var oData = {
				showTrack1: true,
				showTrack2: true,
				showTrack3: true,
				showTableChannel3: true,
				hideTableChannel12: false,
				showEnglish: false,
				showGerman: false,
				open: false,
				videoicon: "sap-icon://video",
				channel1: "https://www.youtube.com/watch?v=l5DEB-uwjAw",
				channel2: "https://www.youtube.com/watch?v=Yeo9rz-7Pdc"
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