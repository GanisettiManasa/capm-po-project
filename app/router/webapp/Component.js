sap.ui.define([
    "sap/ui/core/UIComponent",
    "./model/models"
], function (UIComponent, models) {
    "use strict";

    return UIComponent.extend("poapp.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            console.log("models:", models); // 👈 debug

            this.setModel(models.createDeviceModel(), "device");

            this.getRouter().initialize();
        }
    });
});
