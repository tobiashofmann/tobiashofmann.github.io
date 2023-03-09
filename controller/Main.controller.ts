/*
${copyright}
*/
import BaseController from "./BaseController";
import JSONModel from "sap/ui/model/json/JSONModel";
import models from "../model/models";
import buzzword from "../model/buzzword";
import Event from "sap/ui/base/Event";
import GenericTile from "sap/m/GenericTile";
import Fragment from "sap/ui/core/Fragment";
import * as library from "sap/m/library";
import CSSGrid from "sap/ui/layout/cssgrid/CSSGrid";
import syncStyleClass from "sap/ui/core/syncStyleClass";
import Dialog from "sap/m/Dialog";
import Control from "sap/ui/core/Control";

/**
 * @namespace de.itsfullofstars.bingo.bingo.controller
 */
export default class Main extends BaseController {
	private elements: int;
	private model: JSONModel;
	private buzzwordsModel: JSONModel;
	private _settingsDialog: Promise<Control | Control[]>;
	
	
	public onInit() : void {

		// view model
		this.model = models.createViewModel();
		this.setModel(this.model, "mainView");

		this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

		this.prepareLayout();
		
		// buzzowrd model. loaded from the "internet"
		this.buzzwordsModel = this.getOwnerComponent().getModel() as JSONModel;
		this.buzzwordsModel.dataLoaded()
		.then( () => {
			this.pickBuzzwords();
		})
		.catch( () => console.log("error"));
		
	}

	/**
	 * Prepares the overall layout of the app
	 * columns and rows
	 */
	private prepareLayout() {
		const rows: int = this.model.getProperty("/rows") as int;
		const columns: int = this.model.getProperty("/columns") as int;
		this.elements = rows * columns;
		this.calcColumns(columns);
	}

	/**
	 * Navigate to legal disclosure
	 */
	public navToLegalDisclosure(): void {
		const urlImpressum = "https://www.itsfullofstars.de/Impressum";
		library.URLHelper.redirect(urlImpressum, true);
	}

	/**
	 * Navigate to License file
	 */
	public navToLicense(): void {
		const urlIcense = "https://raw.githubusercontent.com/tobiashofmann/tobiashofmann.github.io/main/LICENSE";
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
		source.toggleStyleClass("bingoCardSelected");
	}

	private pickBuzzwords(): void {
		if (this.elements <= this.buzzwordsModel.getProperty("/").length) {
			let selectedWords:string[] = [];

			selectedWords = buzzword.pickBuzzwords(this.buzzwordsModel, this.elements);
			//console.log(selectedWords);
			
			this.setModel(new JSONModel(selectedWords), "bingo");
		}
		
	}

	public onSettingsClose(): void {
		this._settingsDialog
		.then( (settingsDialog) => {
			(settingsDialog as Dialog).close();
			this.prepareLayout();
			this.doReloadBuzzowrds();
		})
		.catch( () => console.log("Error"));
	}


	public doOpenSettings(): void {
		const oView = this.getView();
		// eslint-disable-next-line @typescript-eslint/no-misused-promises
		if (!this._settingsDialog) {
			this._settingsDialog = Fragment.load({
				id:	oView.getId(),
				name: "de.itsfullofstars.bingo.bingo.view.fragments.Settings",
				controller: this
			}).then( (oSettingsDialog) => {
				const dialog = oSettingsDialog as Dialog;
                oView.addDependent(dialog);
				dialog.open();
				syncStyleClass(this.getOwnerComponent().getContentDensityClass(), this.getView(), dialog);
                return dialog;
            });
		} else {
			this._settingsDialog
			.then( (settingsDialog) => {
				(settingsDialog as Dialog).open();
			})
			.catch( () => console.log("Error"));
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

