sap.ui.define([],function(){
/*
  ${copyright}
  */
var r={pickBuzzwords(r,t){const e=[];for(let n=0;n<t;n++){e.push(this.pickSingleBuzzword(r))}return e},pickSingleBuzzword(r){const t=r.getProperty("/");const e=Math.floor(Math.random()*t.length);const n=t.splice(e,1)[0];r.setProperty("/",t);return n}};return r});
//# sourceMappingURL=buzzword.js.map