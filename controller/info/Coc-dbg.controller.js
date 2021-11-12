sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.Coc", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/coc' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Code of conduct']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
