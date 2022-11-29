/*!
 * ${copyright}
 */

sap.ui.define([
	"sap/ui/core/Core",
	"../library"
], function (Core, library) {
	"use strict";

	/**
	 * Timeline renderer.
	 * @namespace
	 */
	var TimelineRenderer = {
		apiVersion: 2 // usage of DOM Patcher
	};

	var sort = function(aData) {
		var aDataSorted = aData.sort(function(a,b){
			return new Date(b.date) - new Date(a.date);
		});
		return aDataSorted;
	};

	var uniqueMonth = function(aData) {
		var uniqueMonths = new Set();
		aData.forEach((item) => {
			//console.log(item.date);
			const date = new Date(item.date); 
			//console.log(date);
			//var sMonthName = date.toLocaleString('default', { month: 'long' });
			uniqueMonths.add(date.getMonth());
		});
		//console.log(uniqueMonths);
		return uniqueMonths;
	};

	var getModelData = function(oControl) {
		var oBinding = oControl.getBindingInfo("items");
		var oModel = oControl.getModel(oBinding.model);
		return oModel.getData();
	};

	var buildDataModel = function(uniqueMonths, aDataSorted) {
		var oValues = {};

		uniqueMonths.forEach((item) => {

			oValues[item] = [];
			// console.log("uniqueMonth: " + item);
			var res = aDataSorted.filter(monthItem => {
				//console.log("monat");
				//console.log("aktueller monat gesucht: " + item);
				//console.log(new Date(monthItem.date).getMonth());
				if (item === new Date(monthItem.date).getMonth()) { 
					return monthItem;
				}
			});
			//console.log(res);
			oValues[item] = res;
			//console.log(oValues);
		});
		return oValues;
	};

	var startTimeline = function(oRm, oControl) {
		// timeline
		console.group("timeline");
		oRm.openStart("div", oControl); 
		oRm.class("timeline");
		oRm.class("sapUiResponsiveMargin");
		oRm.openEnd();   
	};

	var endTimeline = function(oRm) {
		console.groupEnd();
		oRm.close("div");
	};

	var startTimelineGroup = function(oRm, oControl) {
		// timeline group		
		console.group("timelineGroup");
		oRm.openStart("div", oControl); 
		oRm.class("timelineGroup");
		oRm.openEnd();   
	};

	var endTimelineGroup = function(oRm) {
		console.groupEnd();
		oRm.close("div");
	};

	var startTimelineSeperator = function(oRm, oControl) {
		// timeline main group
		console.group("timelineSeperator timeHeader");

		oRm.openStart("span", oControl); 
		oRm.class("timelineSeperator");
		oRm.class("timeHeader"); 
		oRm.class("sapUiSmallMarginTop");
		oRm.openEnd();
	};

	var endTimelineSeperator = function(oRm, oControl) {
		// timeline main group
		console.groupEnd();
		oRm.close("span");
	};

	var startTimelineCardsGroup = function(oRm, oControl) {
		// timeline group for cards
		console.group("timelineContentGroup");

		oRm.openStart("div", oControl); 
		oRm.class("timelineContentGroup");
		oRm.openEnd(); 
	};

	var endTimelineCardsGroup = function(oRm) {
		console.groupEnd();
		oRm.close("div");
	};
		
	
	/**
	 * Writes main grouping header -> month
	 * @param {*} oRm 
	 * @param {*} date 
	 */
	var startTimelineMonth  = function(oRm, date) {		
		var sMonth = date.toLocaleString('default', { month: 'long' });
		oRm.text(sMonth);
		// close span
		oRm.close("span");
	};

	var startTimelineCardBox = function(oRm, oControl) {
		// card cards
		console.group("timelineCardBox timelineCard");

		oRm.openStart("div", oControl); 
		oRm.class("timelineCardBox");
		oRm.class("timelineCard");
		oRm.openEnd();
	};

	var endTimelineCardBox = function(oRm) {
		// close card cards
		console.groupEnd();
		oRm.close("div");
	}

	var writeTimelineCardHeader = function(oRm, oControl, item) {
		console.group("timelineCardHeader");
		// card header
		oRm.openStart("header", oControl); 
		oRm.class("timelineCardHeader");
		oRm.openEnd(); 

		// day
		startTimelineCardHeaderDay(oRm, oControl, item);

		writeTimelineCardTitle(oRm, oControl, item);

		// close header
		console.groupEnd();
		oRm.close("header");
	};

	
	var startTimelineCardHeaderDay = function(oRm, oControl, item) {
		console.group("timeHeader");

		oRm.openStart("time", oControl); 
		oRm.class("timeHeader");
		oRm.openEnd(); 	
			//
			// card date
			//
			//console.log(item);
			var date = new Date(item.date);
			//console.log(date.getDate());
			var sDay = date.getDate();
			var sDayLong= date.toLocaleDateString("de", { weekday: 'long' });     

			oRm.openStart("span", oControl); 	
			oRm.openEnd(); 
			oRm.text(sDay + " - " + sDayLong);
			oRm.close("span");
		// close time
		console.groupEnd();
		oRm.close("time");	
	};

	var writeTimelineCardTitle = function(oRm, oControl, item) {
		console.group("timelineCardTitle");

		oRm.openStart("div", oControl);
		oRm.class("sapUiResponsiveMargin");
		oRm.class("sapUiNoMarginBegin");			
		oRm.openEnd();

		var oTitle = new sap.m.Title({
			titleStyle: "H4",
			text: item.title,
			wrapping: false,
			wrappingType: "Normal",
			level: "H4",
			visible: true
		});

		oRm.renderControl(oTitle);
		oRm.close("div"); 

		console.groupEnd();
	};

	var writeTimelineCardContent = function(oRm, oControl, item) {
		// card content
		console.group("timelineCardContent");

		oRm.openStart("div", oControl); 
		oRm.class("timelineCardContent");		
		oRm.openEnd(); 		
		oRm.text(item.text);
		oRm.close("div");

		console.groupEnd();
	};
	

	var writeTimelineCardLinks = function(oRm, oControl, item) {
		console.group("writeTimelineCardLinks");

		oRm.openStart("div", oControl); 
		oRm.class("sapUiResponsiveMargin");
		oRm.class("sapUiNoMarginBegin");	
		oRm.openEnd(); 

		var oVbox = new sap.m.VBox();

		item.links.forEach(link => {
			var oLink = new sap.m.Link({
				href: link.href,
				target: link.target,
				text: link.title
			});
			oVbox.addItem(oLink);
		});
		oRm.renderControl(oVbox);
		
		oRm.close("div");

		console.groupEnd();
	};


	/**
	 * Renders the HTML for the given control, using the provided
	 * {@link sap.ui.core.RenderManager}.
	 *
	 * @param {sap.ui.core.RenderManager} rm The reference to the <code>sap.ui.core.RenderManager</code>
	 * @param {sap.ui.core.Control} control The control instance to be rendered
	 */
	 TimelineRenderer.render = function (oRm, oControl) {

		//var i18n = Core.getLibraryResourceBundle("de.itsfullofstars.timeline");

		// get JSON Data
		var aData = getModelData(oControl);

		// sort array, newest date entry on position 0
		var aDataSorted = sort(aData);

		// get unique months as numbers 
		const uniqueMonths = uniqueMonth(aDataSorted);

		// build the data model
		var oValues = buildDataModel(uniqueMonths, aDataSorted);

		startTimeline(oRm, oControl);
		
			startTimelineGroup(oRm, oControl);

				uniqueMonths.forEach((item) => {

					startTimelineSeperator(oRm, oControl);
					
					startTimelineMonth(oRm, new Date(oValues[item][0].date));

						startTimelineCardsGroup(oRm, oControl);
				
							//
							// each entry in JSON is a card
							//
							oValues[item].forEach(item => {

								startTimelineCardBox(oRm, oControl);
								
								writeTimelineCardHeader(oRm, oControl, item);
								
								writeTimelineCardContent(oRm, oControl, item);

								writeTimelineCardLinks(oRm, oControl, item);
								
								endTimelineCardBox(oRm);
							});
						
						// close cards
						endTimelineCardsGroup(oRm);

					endTimelineSeperator(oRm);
					
						
				}); 

			// close timeline group
			endTimelineGroup(oRm);	
		
		// close timeline
		endTimeline(oRm);	
	};

	return TimelineRenderer;

});
