sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.Committee", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/committee' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Committee']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
