/*!
 * ${copyright}
 */
sap.ui.define(["../library","sap/ui/core/Control","./TimelineRenderer"],function(e,i,t){"use strict";var r=e.ExampleColor;var a=i.extend("de.itsfullofstars.timeline.controls.Timeline",{metadata:{library:"de.itsfullofstars.timeline",properties:{title:{type:"string",defaultValue:"History"},width:{type:"sap.ui.core.CSSSize",defaultValue:"1500px"}},aggregations:{items:{singularName:"item"}},defaultAggregation:"items"},renderer:t,onclick:function(){this.firePress()}});return a});