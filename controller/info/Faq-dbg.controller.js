sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.Faq", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/faq' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'FAQ']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
