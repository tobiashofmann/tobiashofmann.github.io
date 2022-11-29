sap.ui.define([
    "sap/ui/core/mvc/Controller",
     "sap/ui/model/resource/ResourceModel"
], function (Controller, ResourceModel) {
	"use strict";

	return Controller.extend("abapconf.web.abapconf.card.orga.johann.Main", {
		onInit: function () {
            var i18nModel = new ResourceModel({
                bundleName: "abapconf.web.abapconf.card.orga.johann.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
		}
	});
});