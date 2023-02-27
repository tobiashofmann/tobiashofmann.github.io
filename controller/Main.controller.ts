import BaseController from "./BaseController";
import formatter from "../model/formatter";
import JSONModel from "sap/ui/model/json/JSONModel";
import models from "../model/models";
import buzzword from "../model/buzzword";
import Event from "sap/ui/base/Event";
import GenericTile from "sap/m/GenericTile";
import Fragment from "sap/ui/core/Fragment";
import * as library from "sap/m/library";
import CSSGrid from "sap/ui/layout/cssgrid/CSSGrid";

/**
 * @namespace de.itsfullofstars.bingo.bingo.controller
 */
export default class Main extends BaseController {
	private formatter = formatter;
	private elements: int;
	private model: JSONModel;
	private buzzwordsModel: JSONModel;
	//private _legalInfoPopover: ActionSheet;

	
	public onInit() : void {

		// view model
		this.model = models.createViewModel();
		this.setModel(this.model, "mainView");

		this.prepareLayout();
		
		// buzzowrd model. loaded from the "internet"
		this.buzzwordsModel = this.getOwnerComponent().getModel() as JSONModel;
		this.buzzwordsModel.dataLoaded()
		.then( () => {
			this.pickBuzzwords();
		})
		.catch( () => console.log("error"));
		
	}

	private prepareLayout() {
		const rows: int = this.model.getProperty("/rows") as int;
		const columns: int = this.model.getProperty("/columns") as int;
		this.elements = rows * columns;
		
		this.calcColumns(columns);
	}

	public navToLegalDisclosure(): void {
		const urlImpressum = "https://www.itsfullofstars.de/Impressum";
		library.URLHelper.redirect(urlImpressum, true);
	}

	public navToLicense(): void {
		const urlIcense = "/LICENSE";
		library.URLHelper.redirect(urlIcense, true);
	}

	public onLegalInfoPress(event: Event): void {
		const oView = this.getView();
		const source = event.getSource();
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		if (!this._legalInfoPopover) {
			this._legalInfoPopover = Fragment.load({
				id:	oView.getId(),
				name: "de.itsfullofstars.bingo.bingo.view.fragments.LegalInfo",
				controller: this
			}).then(function (oLegalPopover){
                oView.addDependent(oLegalPopover);
				oLegalPopover.openBy(source);
                return oLegalPopover;
            });
		} else {
			this._legalInfoPopover
			.then( (infoPopover) => {
				if (infoPopover.isOpen()) {
					infoPopover.close();
				} else {
					infoPopover.openBy(source);
				}
			});
		}

	}

	
	private calcColumns(columns: int): void {
		const columnsWidth:number = Math.floor(100 / columns);
		let cssLayoutcolumns = "";
		for (let i = 0; i < columns; i++) {
			cssLayoutcolumns += columnsWidth.toString() + "% ";
		}
		
		const model = this.getModel("mainView") as JSONModel;
		model.setProperty("/columnLayout", cssLayoutcolumns);
	}
	
	public onTilePress(event: Event): void {
		const source:GenericTile = event.getSource() as GenericTile;
		//source.setState("Disabled");
		source.toggleStyleClass("bingoCardSelected");
	}

	private pickBuzzwords(): void {
		console.log("pickBuzzwords");
		if (this.elements <= this.buzzwordsModel.getProperty("/").length) {
			let selectedWords:string[] = [];

			selectedWords = buzzword.pickBuzzwords(this.buzzwordsModel, this.elements);
			console.log(selectedWords);
			
			this.setModel(new JSONModel(selectedWords), "bingo");
		}
		
	}

	public doReloadBuzzowrds(): void {
		// buzzowrd model. loaded from the "internet"
		this.buzzwordsModel = new JSONModel();
		this.buzzwordsModel.loadData("./model/buzzwords.json");
		this.buzzwordsModel.dataLoaded()
		.then( () => {
			this.pickBuzzwords();
		})
		.catch( () => console.log("error"));	
		
		this.resetTileState();
	}

	private resetTileState(): void {
		const grid = this.byId("bingoCardGrid") as CSSGrid;
		const items = grid.getItems();

		for (let i=0; i< items.length; i++) {
			items[i].removeStyleClass("bingoCardSelected");
		}

	}

}

