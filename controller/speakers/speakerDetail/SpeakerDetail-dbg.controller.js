sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.speakerDetail.SpeakerDetail", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/speakers' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'SpeakerDetail']);
					_paq.push(['trackPageView']);
				});

				this.getRouter().getRoute("SpeakerDetail").attachPatternMatched(this._onObjectMatched, this);
			},

			
			_onObjectMatched: function (oEvent) {
				var aData = this.getModel("speakers").getData();				
				var sId = oEvent.getParameter("arguments").id;
				var index = aData.findIndex(x => x.id === sId);

				this.getView().bindElement({
					path: "/" + index,
					model: "speakers"
				});
			}
		});
	});
