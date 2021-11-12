sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.Impressum", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/impressum' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Impressum']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
