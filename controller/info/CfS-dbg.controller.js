sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.CfS", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/cfs' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Call for Speakers']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
