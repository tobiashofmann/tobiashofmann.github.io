import JSONModel from "sap/ui/model/json/JSONModel";
import BindingMode from "sap/ui/model/BindingMode";
import * as Device from "sap/ui/Device";
import { BingoData } from "./types";


export default {

	createDeviceModel : () => {
		const oModel = new JSONModel(Device);
		oModel.setDefaultBindingMode(BindingMode.OneWay);
		return oModel;
	},

	createViewModel : () => {
		
		const data: BingoData = {
			rows: Device.system.phone ? 4 : 5,
			maxRows: Device.system.phone ? 5 : 8,
			columns: Device.system.phone ? 4 : 5,
			maxColumns: Device.system.phone ? 5 : 8,
			rowLayout: "20% 20% 20% 20% 20%",
			columnLayout: "20% 20% 20% 20% 20%"
		};
		const model = new JSONModel(data);
		return model;
	}

};