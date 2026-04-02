sap.ui.jsview("po.ui.view.Home", {

	getControllerName: function() {
		return "po.ui.controller.Home";
	},

	createContent: function(oController) {

		var oPage = new sap.m.Page({
			title: "Home"
		});

		return oPage;
	}

});