sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController",
	"sap/ui/core/Fragment",
	"abapconf/web/abapconf/model/models"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Fragment, models) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.header.Header", {
			onInit: function () {

				var oHeaderModel = models.createHeaderViewModel();
				this.setModel(oHeaderModel, "headerView");

				this._startCounter();
				
            },


			_startCounter: function() {

				var sStartTime = "2021-12-09T08:45:00+01:00";
				//var sStartTime = "2021-12-07T08:45:00+01:00";
				//var sTimeZone = "Europe/Berlin";
				//var sStartDate = new Date(sStartTime).toLocaleString("en-US", {timeZone: sTimeZone}).getTime();
				var date = new Date(sStartTime);
				var timeCountdown = date.getTime();

				var oModel = this.getModel("headerView");

				var x = setInterval(function() {

					// Get today's date and time
					var now = new Date().getTime();
					  
					// Find the distance between now and the count down date
					var distance = timeCountdown - now;
					  
					// Time calculations for days, hours, minutes and seconds
					var days = Math.floor(distance / (1000 * 60 * 60 * 24));
					var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);
				
					oModel.setProperty("/day", days);
					oModel.setProperty("/hour", hours < 10 ? "0"+hours : hours);
					oModel.setProperty("/minute", minutes < 10 ? "0"+minutes : minutes);
					oModel.setProperty("/second", seconds < 10 ? "0"+seconds : seconds);

					if (days < 0 && hours < 0 && minutes < 0 && seconds < 0) {
						oModel.setProperty("/live", true);
					}

					// If the count down is over, write some text 
					if (distance < 0) {
					  clearInterval(x);
					 
					}
				  }, 1000);
			},
            
            doNavigation: function($event, sTarget) {
                this.navTo(sTarget);
            },


			/**
			 * Show popover for lanuage selection
			 * 
			 * @param {sap.ui.base.Event} oEvent 
			 * @public
			 */
			onSelectLanguage: function(oEvent) {
				console.log("onSelectLanguage");

				var oSource = oEvent.getSource();
				var oView = this.getView();

				if (!this._oSelectLanguage) {
					this._oSelectLanguage = Fragment.load({
						id: oView.getId(),
						name: "abapconf.web.abapconf.view.dialog.SelectLanguage",
						controller: this
					}).then(function(oPopover) {
						oView.addDependent(oPopover);
						return oPopover;
					});
				}
				this._oSelectLanguage.then(function(oPopover) {
					oPopover.openBy(oSource);
				});

			},

			_closeSelectLanguage: function () {
				this.byId("selectLanguagePopover").close();
			},

			doChangeLanguage: function(oEvent) {
				var oItem = oEvent.getParameter("item");
				var sKey = oItem.getProperty("key");

				sap.ui.getCore().getConfiguration().setLanguage(sKey);
				
				this._closeSelectLanguage();
			}
		});
	});
