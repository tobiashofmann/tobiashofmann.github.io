/*!
 * ${copyright}
 */
sap.ui.define(["sap/ui/core/Core","../library"],function(e,n){"use strict";var o={apiVersion:2};var t=function(e){var n=e.sort(function(e,n){return new Date(n.date)-new Date(e.date)});return n};var r=function(e){var n=new Set;e.forEach(e=>{const o=new Date(e.date);n.add(o.getMonth())});return n};var a=function(e){var n=e.getBindingInfo("items");var o=e.getModel(n.model);return o.getData()};var i=function(e,n){var o={};e.forEach(e=>{o[e]=[];var t=n.filter(n=>{if(e===new Date(n.date).getMonth()){return n}});o[e]=t});return o};var s=function(e,n){console.group("timeline");e.openStart("div",n);e.class("timeline");e.class("sapUiResponsiveMargin");e.openEnd()};var l=function(e){console.groupEnd();e.close("div")};var c=function(e,n){console.group("timelineGroup");e.openStart("div",n);e.class("timelineGroup");e.openEnd()};var p=function(e){console.groupEnd();e.close("div")};var d=function(e,n){console.group("timelineSeperator timeHeader");e.openStart("span",n);e.class("timelineSeperator");e.class("timeHeader");e.class("sapUiSmallMarginTop");e.openEnd()};var u=function(e,n){console.groupEnd();e.close("span")};var v=function(e,n){console.group("timelineContentGroup");e.openStart("div",n);e.class("timelineContentGroup");e.openEnd()};var g=function(e){console.groupEnd();e.close("div")};var f=function(e,n){var o=n.toLocaleString("default",{month:"long"});e.text(o);e.close("span")};var m=function(e,n){console.group("timelineCardBox timelineCard");e.openStart("div",n);e.class("timelineCardBox");e.class("timelineCard");e.openEnd()};var E=function(e){console.groupEnd();e.close("div")};var S=function(e,n,o){console.group("timelineCardHeader");e.openStart("header",n);e.class("timelineCardHeader");e.openEnd();C(e,n,o);w(e,n,o);console.groupEnd();e.close("header")};var C=function(e,n,o){console.group("timeHeader");e.openStart("time",n);e.class("timeHeader");e.openEnd();var t=new Date(o.date);var r=t.getDate();var a=t.toLocaleDateString("de",{weekday:"long"});e.openStart("span",n);e.openEnd();e.text(r+" - "+a);e.close("span");console.groupEnd();e.close("time")};var w=function(e,n,o){console.group("timelineCardTitle");e.openStart("div",n);e.class("sapUiResponsiveMargin");e.class("sapUiNoMarginBegin");e.openEnd();var t=new sap.m.Title({titleStyle:"H4",text:o.title,wrapping:false,wrappingType:"Normal",level:"H4",visible:true});e.renderControl(t);e.close("div");console.groupEnd()};var h=function(e,n,o){console.group("timelineCardContent");e.openStart("div",n);e.class("timelineCardContent");e.openEnd();e.text(o.text);e.close("div");console.groupEnd()};var x=function(e,n,o){console.group("writeTimelineCardLinks");e.openStart("div",n);e.class("sapUiResponsiveMargin");e.class("sapUiNoMarginBegin");e.openEnd();var t=new sap.m.VBox;o.links.forEach(e=>{var n=new sap.m.Link({href:e.href,target:e.target,text:e.title});t.addItem(n)});e.renderControl(t);e.close("div");console.groupEnd()};o.render=function(e,n){var o=a(n);var C=t(o);const w=r(C);var D=i(w,C);s(e,n);c(e,n);w.forEach(o=>{d(e,n);f(e,new Date(D[o][0].date));v(e,n);D[o].forEach(o=>{m(e,n);S(e,n,o);h(e,n,o);x(e,n,o);E(e)});g(e);u(e)});p(e);l(e)};return o});