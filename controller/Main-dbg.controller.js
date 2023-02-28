sap.ui.define(["./BaseController", "../model/formatter", "sap/ui/model/json/JSONModel", "../model/models", "../model/buzzword", "sap/ui/core/Fragment", "sap/m/library"], function (__BaseController, __formatter, JSONModel, __models, __buzzword, Fragment, library) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule && typeof obj.default !== "undefined" ? obj.default : obj;
  }
  const BaseController = _interopRequireDefault(__BaseController);
  const formatter = _interopRequireDefault(__formatter);
  const models = _interopRequireDefault(__models);
  const buzzword = _interopRequireDefault(__buzzword);
  /**
   * @namespace de.itsfullofstars.bingo.bingo.controller
   */
  const Main = BaseController.extend("de.itsfullofstars.bingo.bingo.controller.Main", {
    constructor: function constructor() {
      BaseController.prototype.constructor.apply(this, arguments);
      this.formatter = formatter;
    },
    onInit: function _onInit() {
      // view model
      this.model = models.createViewModel();
      this.setModel(this.model, "mainView");
      this.prepareLayout();

      // buzzowrd model. loaded from the "internet"
      this.buzzwordsModel = this.getOwnerComponent().getModel();
      this.buzzwordsModel.dataLoaded().then(() => {
        this.pickBuzzwords();
      }).catch(() => console.log("error"));
    },
    prepareLayout: function _prepareLayout() {
      const rows = this.model.getProperty("/rows");
      const columns = this.model.getProperty("/columns");
      this.elements = rows * columns;
      this.calcColumns(columns);
    },
    navToLegalDisclosure: function _navToLegalDisclosure() {
      const urlImpressum = "https://www.itsfullofstars.de/Impressum";
      library.URLHelper.redirect(urlImpressum, true);
    },
    navToLicense: function _navToLicense() {
      const urlIcense = "/LICENSE";
      library.URLHelper.redirect(urlIcense, true);
    },
    onLegalInfoPress: function _onLegalInfoPress(event) {
      const oView = this.getView();
      const source = event.getSource();
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      if (!this._legalInfoPopover) {
        this._legalInfoPopover = Fragment.load({
          id: oView.getId(),
          name: "de.itsfullofstars.bingo.bingo.view.fragments.LegalInfo",
          controller: this
        }).then(function (oLegalPopover) {
          oView.addDependent(oLegalPopover);
          oLegalPopover.openBy(source);
          return oLegalPopover;
        });
      } else {
        this._legalInfoPopover.then(infoPopover => {
          if (infoPopover.isOpen()) {
            infoPopover.close();
          } else {
            infoPopover.openBy(source);
          }
        });
      }
    },
    calcColumns: function _calcColumns(columns) {
      const columnsWidth = Math.floor(100 / columns);
      let cssLayoutcolumns = "";
      for (let i = 0; i < columns; i++) {
        cssLayoutcolumns += columnsWidth.toString() + "% ";
      }
      const model = this.getModel("mainView");
      model.setProperty("/columnLayout", cssLayoutcolumns);
    },
    onTilePress: function _onTilePress(event) {
      const source = event.getSource();
      //source.setState("Disabled");
      source.toggleStyleClass("bingoCardSelected");
    },
    pickBuzzwords: function _pickBuzzwords() {
      console.log("pickBuzzwords");
      if (this.elements <= this.buzzwordsModel.getProperty("/").length) {
        let selectedWords = [];
        selectedWords = buzzword.pickBuzzwords(this.buzzwordsModel, this.elements);
        console.log(selectedWords);
        this.setModel(new JSONModel(selectedWords), "bingo");
      }
    },
    doReloadBuzzowrds: function _doReloadBuzzowrds() {
      // buzzowrd model. loaded from the "internet"
      this.buzzwordsModel = new JSONModel();
      this.buzzwordsModel.loadData("./model/buzzwords.json");
      this.buzzwordsModel.dataLoaded().then(() => {
        this.pickBuzzwords();
      }).catch(() => console.log("error"));
      this.resetTileState();
    },
    resetTileState: function _resetTileState() {
      const grid = this.byId("bingoCardGrid");
      const items = grid.getItems();
      for (let i = 0; i < items.length; i++) {
        items[i].removeStyleClass("bingoCardSelected");
      }
    }
  });
  return Main;
});