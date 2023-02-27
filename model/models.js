sap.ui.define(["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"], function (JSONModel, BindingMode, Device) {
  var __exports = {
    createDeviceModel: () => {
      const oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode(BindingMode.OneWay);
      return oModel;
    },
    createViewModel: () => {
      const data = {
        rows: 5,
        columns: Device.system.phone ? 4 : 5,
        rowLayout: "20% 20% 20% 20% 20%",
        columnLayout: "20% 20% 20% 20% 20%"
      };
      const model = new JSONModel(data);
      return model;
    }
  };
  return __exports;
});