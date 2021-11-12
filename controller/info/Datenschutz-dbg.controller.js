sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.Datenschutz", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/datenschutz' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Datenschutzerklärung']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
