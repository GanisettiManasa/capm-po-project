sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
  "use strict";

  return Controller.extend("poapp.controller.View1", {

    onSearch: function () {
      const oTable = this.byId("poTable");
      const oBinding = oTable.getBinding("items");

      const aFilters = [];

      const po = this.byId("poInput").getValue();
      const grp = this.byId("purchaseGrpInput").getValue();
      const supplier = this.byId("supplierInput").getValue();

      if (po) {
        aFilters.push(new Filter("PurchaseOrder", FilterOperator.Contains, po));
      }

      if (grp) {
        aFilters.push(new Filter("PurchasingGroup", FilterOperator.Contains, grp));
      }

      if (supplier) {
        aFilters.push(new Filter("Supplier", FilterOperator.Contains, supplier));
      }

      oBinding.filter(aFilters);
    },

    onItemPress: function (oEvent) {
    console.log("Row clicked");

    const oItem = oEvent.getParameter("listItem"); // ✅ correct
    const oContext = oItem.getBindingContext();

    const po = oContext.getProperty("PurchaseOrder");

    console.log("PO:", po);

    this.getOwnerComponent().getRouter().navTo("RouteItems", {
        po: po
    });
}



  });
});
