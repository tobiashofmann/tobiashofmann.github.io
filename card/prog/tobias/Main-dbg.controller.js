sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, ResourceModel) {
	"use strict";

	return Controller.extend("abapconf.2022.org.card.prog.tobias.Main", {
		onInit: function () {
		    var i18nModel = new ResourceModel({
                bundleName: "abapconf.2022.org.card.prog.tobias.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");
		}
	});
});