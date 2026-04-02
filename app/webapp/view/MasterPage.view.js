sap.ui.jsview("po.ui.view.MasterPage", {


	getControllerName: function() {
		'use strict'
		return "po.ui.controller.MasterPage";
	},

	createContent: function(oController) {  
            var oPage = new sap.m.Page({
				title: "Master Page"
            });
            return oPage; 
	    }

});