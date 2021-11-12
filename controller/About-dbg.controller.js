sap.ui.define([
	"./BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.About", {
			onInit: function () {
				if (typeof _paq !== "undefined" ) {
					window.addEventListener('hashchange', function() {
						_paq.push(['setCustomUrl', '/#/about' + window.location.hash.substr(1)]);
						_paq.push(['setDocumentTitle', 'About']);
						_paq.push(['trackPageView']);
					});
				}
			}
		});
	});
