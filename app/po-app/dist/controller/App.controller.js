sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/Filter", "sap/ui/model/FilterOperator"], function (e, t, a) { "use strict"; 
    return e.extend("poapp.controller.App",
         {
             onSearch: function () {
                 var e = this.byId("poTable"); 
                 var i = e.getBinding("items"); var n = []; 
                 var r = this.byId("poInput").getValue(); 
                 var p = this.byId("purchaseGrpInput").getValue();
                  var s = this.byId("supplierInput").getValue();
                   if (r) { n.push(new t("PurchaseOrder", a.Contains, r)) }
                    if (p) { n.push(new t("PurchasingGroup", a.Contains, p)) }
                     if (s) { n.push(new t("Supplier", a.Contains, s)) } i.filter(n) } }) });
//# sourceMappingURL=App.controller.js.map