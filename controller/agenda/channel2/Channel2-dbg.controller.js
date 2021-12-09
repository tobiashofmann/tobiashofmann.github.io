sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController",
	"abapconf/web/abapconf/model/models",
	"sap/ui/core/Fragment",
	"sap/m/library",
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, models, Fragment, mobileLibrary) {
		"use strict";

		var URLHelper = mobileLibrary.URLHelper;
		//var urlABAPConfYTChannel = "https://www.youtube.com/channel/UC-nW3KEd85b6mOqNRziZ9tA";
		var urlABAPConfYTChannel = "https://www.youtube.com/watch?v=rCl1b9c_yNY";
		return BaseController.extend("abapconf.web.abapconf.controller.agenda.channel2.Channel2", {
			onInit: function () {
				if (typeof _paq !== "undefined" ) {
					window.addEventListener('hashchange', function() {
						_paq.push(['setCustomUrl', '/#/agenda/channel2' + window.location.hash.substr(1)]);
						_paq.push(['setDocumentTitle', 'Channel2']);
						_paq.push(['trackPageView']);
					});
				}

				this.setModel(models.createAgendaViewModel(), "channel2View");
			},


			/**
			 * User clicks placeholder image
			 * Opens link to official ABAPConf YT channel
			 * @param {*} oEvent 
			 */
			 openYTChannel: function(oEvent) {
				URLHelper.redirect(urlABAPConfYTChannel, true);
			},


			openSession: function(oEvent, iSpeaker) {

				console.log(iSpeaker);

				var oData = this.getModel("speakers").getProperty("/" + iSpeaker);
				var oModel = models.createSessionDetailModel(oData);
				console.log(oModel);
				this.openQuickView(oEvent, oModel);
				
			},

			openQuickView: function (oEvent, oModel) {
				var oButton = oEvent.getSource(),
					oView = this.getView();
	
				if (!this._pQuickView) {
					this._pQuickView = Fragment.load({
						id: oView.getId(),
						name: "abapconf.web.abapconf.view.agenda.Details",
						controller: this
					}).then(function (oQuickView) {
						oView.addDependent(oQuickView);
						return oQuickView;
					});
				}
				this._pQuickView.then(function (oQuickView){
					oQuickView.setModel(oModel);
					oQuickView.openBy(oButton);
				});
			},
	

			/**
			 * Triggered by user
			 * Select language of sessions to show in agenda
			 * @param {*} oEvent 
			 */
			changeAgendaLanguage: function(oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getKey();
				var oModel = this.getView().getModel("agendaView");

				// de
				// en

				switch (sKey)  {
					case "de":
						oModel.setProperty("/showEnglish", true);
						oModel.setProperty("/showGerman", false);
						break;
					case "en":
						oModel.setProperty("/showEnglish", false);
						oModel.setProperty("/showGerman", true);
						break;					
					default: 
						oModel.setProperty("/showEnglish", false);
						oModel.setProperty("/showGerman", false);
					break;
				}
			},
			/**
			 * Triggered by user.
			 * Select which track to hide or show
			 * @param {*} oEvent 
			 */
			changeAgendaTracks: function(oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getKey();
				var oModel = this.getView().getModel("agendaView");
				var bPhone = this.getModel("device").getProperty("/system/phone");

				switch (sKey)  {
					case "track1":
						oModel.setProperty("/showTrack1", true);
						oModel.setProperty("/showTrack2", false);
						oModel.setProperty("/showTrack3", false);
						oModel.setProperty("/showTableChannel3", false);
						if (bPhone) {
							oModel.setProperty("/hideTableChannel12", false);
						}
						break;
					case "track2":
						oModel.setProperty("/showTrack1", false);
						oModel.setProperty("/showTrack2", true);
						oModel.setProperty("/showTrack3", false);
						oModel.setProperty("/showTableChannel3", false);
						if (bPhone) {
							oModel.setProperty("/hideTableChannel12", false);
						}
						break;
					case "track3":
						oModel.setProperty("/showTrack1", false);
						oModel.setProperty("/showTrack2", false);
						oModel.setProperty("/showTrack3", true);
						oModel.setProperty("/showTableChannel3", true);
						if (bPhone) {
							oModel.setProperty("/hideTableChannel12", true);
						}
						break;
					default: 
						oModel.setProperty("/showTrack1", true);
						oModel.setProperty("/showTrack2", true);
						oModel.setProperty("/showTrack3", true);
						oModel.setProperty("/showTableChannel3", true);
						if (bPhone) {
							oModel.setProperty("/hideTableChannel12", false);
						}
					break;
				}
			},


			
			/**
			 * Navigates to the speaker detail page
			 * 
			 * Speaker detail to open is given by parameter iSpeaker, that is the speaker ID
			 * 
			 * @param {*} oEvent 
			 * @param {integer} iSpeaker 
			 * @public
			 */
			openSpeaker: function(oEvent, iSpeaker) {
				this.getRouter().navTo("SpeakerDetail", {
					id: iSpeaker
				});
			}
		});
	});
