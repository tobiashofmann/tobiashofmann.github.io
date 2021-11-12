sap.ui.define([
    "abapconf/web/abapconf/controller/BaseController",
    "sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, Filter, FilterOperator) {
		"use strict";

		return BaseController.extend("abapconf.web.abapconf.controller.speakers.SpeakersTable", {
			onInit: function () {
			},
			
			
			/**
			 * Handle event to open speaker details
			 * 
			 * @param {sap.ui.base.Event} oEvent Press event from ListItem
			 */
			openSpeakerDetail: function(oEvent) {
				console.log("openSpeakerDetail");

				var oItem = oEvent.getParameter("listItem");
				var sPath = oItem.getBindingContextPath();
				var sId = this.getModel("speakers").getProperty(sPath + "/id")

				this.getRouter().navTo("SpeakerDetail", {
					id: sId
				});
				
			},


			/**
			 * Search the speaker table
			 * 
			 * Triggered when the user enters a search term. Searches for all fields in the table
			 * 
			 * @param {*} oEvent 
			 * @public
			 */
			doSearch: function(oEvent) {
				console.log("doSearch");

				var sQuery = oEvent.getParameter("query");
				var oTable = this.byId("tblSpeaker");
                var aFilter = [];
                
			    if (sQuery) {
                    aFilter.push(
                        new Filter({
                            filters: [
                                new Filter("shortBio", FilterOperator.Contains, sQuery),
                                new Filter("firstname", FilterOperator.Contains, sQuery),
                                new Filter("lastname", FilterOperator.Contains, sQuery),
                                new Filter("sessions/0/title", FilterOperator.Contains, sQuery)
                            ],
                            and: false
                        })
                    );
			    }
			    // filter binding
			    var oBinding = oTable.getBinding("items");
                oBinding.filter(aFilter);
            }
		});
	});
