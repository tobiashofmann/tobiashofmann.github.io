sap.ui.define(["./BaseController","sap/ui/model/json/JSONModel","../model/models","../model/buzzword","sap/ui/core/Fragment","sap/m/library","sap/ui/core/syncStyleClass"],function(e,t,o,s,n,i,l){function r(e){return e&&e.__esModule&&typeof e.default!=="undefined"?e.default:e}const d=r(e);const a=r(o);const c=r(s);const u=d.extend("de.itsfullofstars.bingo.bingo.controller.Main",{onInit:function e(){this.model=a.createViewModel();this.setModel(this.model,"mainView");this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());this.prepareLayout();this.buzzwordsModel=this.getOwnerComponent().getModel();this.buzzwordsModel.dataLoaded().then(()=>{this.pickBuzzwords()}).catch(()=>console.log("error"))},prepareLayout:function e(){const t=this.model.getProperty("/rows");const o=this.model.getProperty("/columns");this.elements=t*o;this.calcColumns(o)},navToLegalDisclosure:function e(){const t="https://www.itsfullofstars.de/Impressum";i.URLHelper.redirect(t,true)},navToLicense:function e(){const t="/LICENSE";i.URLHelper.redirect(t,true)},onLegalInfoPress:function e(t){const o=this.getView();const s=t.getSource();if(!this._legalInfoPopover){this._legalInfoPopover=n.load({id:o.getId(),name:"de.itsfullofstars.bingo.bingo.view.fragments.LegalInfo",controller:this}).then(function(e){o.addDependent(e);e.openBy(s);return e})}else{this._legalInfoPopover.then(e=>{if(e.isOpen()){e.close()}else{e.openBy(s)}})}},calcColumns:function e(t){const o=Math.floor(100/t);let s="";for(let e=0;e<t;e++){s+=o.toString()+"% "}const n=this.getModel("mainView");n.setProperty("/columnLayout",s)},onTilePress:function e(t){const o=t.getSource();o.toggleStyleClass("bingoCardSelected")},pickBuzzwords:function e(){if(this.elements<=this.buzzwordsModel.getProperty("/").length){let e=[];e=c.pickBuzzwords(this.buzzwordsModel,this.elements);this.setModel(new t(e),"bingo")}},onSettingsClose:function e(){this._settingsDialog.then(e=>{e.close();this.prepareLayout();this.doReloadBuzzowrds()}).catch(()=>console.log("Error"))},doOpenSettings:function e(){const t=this.getView();if(!this._settingsDialog){this._settingsDialog=n.load({id:t.getId(),name:"de.itsfullofstars.bingo.bingo.view.fragments.Settings",controller:this}).then(e=>{const o=e;t.addDependent(o);o.open();l(this.getOwnerComponent().getContentDensityClass(),this.getView(),o);return o})}else{this._settingsDialog.then(e=>{e.open()}).catch(()=>console.log("Error"))}},doReloadBuzzowrds:function e(){this.buzzwordsModel=new t;this.buzzwordsModel.loadData("./model/buzzwords.json");this.buzzwordsModel.dataLoaded().then(()=>{this.pickBuzzwords()}).catch(()=>console.log("error"));this.resetTileState()},resetTileState:function e(){const t=this.byId("bingoCardGrid");const o=t.getItems();for(let e=0;e<o.length;e++){o[e].removeStyleClass("bingoCardSelected")}}});return u});
//# sourceMappingURL=Main.controller.js.map