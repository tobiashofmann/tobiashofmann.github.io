sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
  var __exports = {
    createDeviceModel: () => {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode(BindingMode.OneWay);
      return oModel;
    },
    createViewModel: () => {
      const data = {
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
  return __exports;
});