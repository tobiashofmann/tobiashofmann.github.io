//@ui5-bundle de/itsfullofstars/timeline/library-preload.js
/*!
 * ${copyright}
 */
sap.ui.predefine("de/itsfullofstars/timeline/controls/Timeline",["../library","sap/ui/core/Control","./TimelineRenderer"],function(e,i,t){"use strict";var r=e.ExampleColor;var l=i.extend("de.itsfullofstars.timeline.controls.Timeline",{metadata:{library:"de.itsfullofstars.timeline",properties:{title:{type:"string",defaultValue:"History"},width:{type:"sap.ui.core.CSSSize",defaultValue:"1500px"}},aggregations:{items:{singularName:"item"}},defaultAggregation:"items"},renderer:t,onclick:function(){this.firePress()}});return l});
/*!
 * ${copyright}
 */
sap.ui.predefine("de/itsfullofstars/timeline/controls/TimelineRenderer",["sap/ui/core/Core","../library"],function(e,n){"use strict";var o={apiVersion:2};var t=function(e){var n=e.sort(function(e,n){return new Date(n.date)-new Date(e.date)});return n};var r=function(e){var n=new Set;e.forEach(e=>{const o=new Date(e.date);n.add(o.getMonth())});return n};var a=function(e){var n=e.getBindingInfo("items");var o=e.getModel(n.model);return o.getData()};var i=function(e,n){var o={};e.forEach(e=>{o[e]=[];var t=n.filter(n=>{if(e===new Date(n.date).getMonth()){return n}});o[e]=t});return o};var s=function(e,n){console.group("timeline");e.openStart("div",n);e.class("timeline");e.class("sapUiResponsiveMargin");e.openEnd()};var l=function(e){console.groupEnd();e.close("div")};var c=function(e,n){console.group("timelineGroup");e.openStart("div",n);e.class("timelineGroup");e.openEnd()};var d=function(e){console.groupEnd();e.close("div")};var p=function(e,n){console.group("timelineSeperator timeHeader");e.openStart("span",n);e.class("timelineSeperator");e.class("timeHeader");e.class("sapUiSmallMarginTop");e.openEnd()};var u=function(e,n){console.groupEnd();e.close("span")};var v=function(e,n){console.group("timelineContentGroup");e.openStart("div",n);e.class("timelineContentGroup");e.openEnd()};var g=function(e){console.groupEnd();e.close("div")};var f=function(e,n){var o=n.toLocaleString("default",{month:"long"});e.text(o);e.close("span")};var m=function(e,n){console.group("timelineCardBox timelineCard");e.openStart("div",n);e.class("timelineCardBox");e.class("timelineCard");e.openEnd()};var E=function(e){console.groupEnd();e.close("div")};var S=function(e,n,o){console.group("timelineCardHeader");e.openStart("header",n);e.class("timelineCardHeader");e.openEnd();C(e,n,o);w(e,n,o);console.groupEnd();e.close("header")};var C=function(e,n,o){console.group("timeHeader");e.openStart("time",n);e.class("timeHeader");e.openEnd();var t=new Date(o.date);var r=t.getDate();var a=t.toLocaleDateString("de",{weekday:"long"});e.openStart("span",n);e.openEnd();e.text(r+" - "+a);e.close("span");console.groupEnd();e.close("time")};var w=function(e,n,o){console.group("timelineCardTitle");e.openStart("div",n);e.class("sapUiResponsiveMargin");e.class("sapUiNoMarginBegin");e.openEnd();var t=new sap.m.Title({titleStyle:"H4",text:o.title,wrapping:false,wrappingType:"Normal",level:"H4",visible:true});e.renderControl(t);e.close("div");console.groupEnd()};var h=function(e,n,o){console.group("timelineCardContent");e.openStart("div",n);e.class("timelineCardContent");e.openEnd();e.text(o.text);e.close("div");console.groupEnd()};var x=function(e,n,o){console.group("writeTimelineCardLinks");e.openStart("div",n);e.class("sapUiResponsiveMargin");e.class("sapUiNoMarginBegin");e.openEnd();var t=new sap.m.VBox;o.links.forEach(e=>{var n=new sap.m.Link({href:e.href,target:e.target,text:e.title});t.addItem(n)});e.renderControl(t);e.close("div");console.groupEnd()};o.render=function(e,n){var o=a(n);var C=t(o);const w=r(C);var D=i(w,C);s(e,n);c(e,n);w.forEach(o=>{p(e,n);f(e,new Date(D[o][0].date));v(e,n);D[o].forEach(o=>{m(e,n);S(e,n,o);h(e,n,o);x(e,n,o);E(e)});g(e);u(e)});d(e);l(e)};return o});
/*!
 * ${copyright}
 */
sap.ui.predefine("de/itsfullofstars/timeline/library",["sap/ui/core/library"],function(){"use strict";sap.ui.getCore().initLibrary({name:"de.itsfullofstars.timeline",version:"1.0.0",dependencies:["sap.ui.core"],types:[],interfaces:[],controls:["de.itsfullofstars.timeline.controls.Timeline"],elements:[],noLibraryCSS:false});var e=de.itsfullofstars.timeline;return e});
sap.ui.require.preload({
	"de/itsfullofstars/timeline/manifest.json":'{"_version":"1.21.0","sap.app":{"id":"de.itsfullofstars.timeline","type":"library","embeds":[],"applicationVersion":{"version":"1.0.0"},"title":"timeline","description":"Displays data form provided model in a timeline","resources":"resources.json","offline":true},"sap.ui":{"technology":"UI5","supportedThemes":["base","sap_belize","sap_belize_hcb","sap_belize_hcw","sap_belize_plus","sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw"]},"sap.ui5":{"dependencies":{"minUI5Version":"1.82","libs":{"sap.ui.core":{"minVersion":"1.82.0"}}},"library":{"i18n":false,"content":{"controls":["de.itsfullofstars.timeline.controls.Timeline"],"elements":[],"types":[],"interfaces":[]}}}}'
});
