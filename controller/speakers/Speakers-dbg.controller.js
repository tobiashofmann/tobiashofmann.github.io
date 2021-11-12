sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.speakers.Speakers", {
			onInit: function () {
				window.addEventListener('hashchange', function() {
					_paq.push(['setCustomUrl', '/#/speakers' + window.location.hash.substr(1)]);
					_paq.push(['setDocumentTitle', 'Speakers']);
					_paq.push(['trackPageView']);
				});
			}
		});
	});
