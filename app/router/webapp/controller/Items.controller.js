sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("poapp.controller.Items", {

        onInit: function () {
            const oRouter = this.getOwnerComponent().getRouter();

            oRouter.getRoute("RouteItems")
                .attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {

            const po = oEvent.getParameter("arguments").po;

            console.log("PO received:", po);

            const oTable = this.byId("itemsTable");

            const applyFilter = () => {
                const oBinding = oTable.getBinding("items");
                if (oBinding) {
                    oBinding.filter([
                        new Filter("PurchaseOrder", FilterOperator.EQ, po)
                    ]);
                }
            };

            const oBinding = oTable.getBinding("items");

            if (oBinding) {
                // If binding exists → apply immediately
                applyFilter();
            } else {
                // If not ready → wait properly
                oTable.attachEventOnce("updateFinished", applyFilter);
            }
        }


    });
});
