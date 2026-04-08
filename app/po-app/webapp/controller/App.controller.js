sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("poapp.controller.App", {

    onSearch: function () {

      var oTable = this.byId("poTable");
      var oBinding = oTable.getBinding("items");

      var aFilters = [];

      var po = this.byId("poInput").getValue();
      var plant = this.byId("plantInput").getValue();
      var material = this.byId("materialInput").getValue();

      if (po) {
        aFilters.push(new Filter("PurchaseOrder", FilterOperator.Contains, po));
      }
      if (plant) {
        aFilters.push(new Filter("Plant", FilterOperator.Contains, plant));
      }
      if (material) {
        aFilters.push(new Filter("Material", FilterOperator.Contains, material));
      }

      oBinding.filter(aFilters);
    }

  });
});
