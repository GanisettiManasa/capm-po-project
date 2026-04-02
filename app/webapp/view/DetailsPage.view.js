sap.ui.jsview("po.ui.view.DetailsPage", {


	getControllerName: function() {
		'use strict'
		return "po.ui.controller.DetailsPage";
	},

	createContent: function(oController) {  
            var oPage = new sap.m.Page({
                title: "Details Page"
            });
            return oPage; 
	    }

});