sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"po/ui/model/formatter"
], function(Controller, formatter) {
	"use strict";

	return Controller.extend("po.ui.controller.Base", {
	    formatter: formatter,
	    getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
	    }
	});

});