sap.ui.jsview("po.ui.view.App", {

	getControllerName: function() {
		'use strict'
		return "po.ui.controller.App";
	},

	createContent: function(oController) {
		'use strict'
		var app = new sap.m.SplitApp(this.createId("appId"), {});

		return app;
	}

});