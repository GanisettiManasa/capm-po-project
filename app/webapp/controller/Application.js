sap.ui.define([
	"sap/ui/base/Object",
    "sap/ui/Device",
    "sap/ui/model/json/JSONModel",
], function(Object, Device, JSONModel, Inspection, NotificationDraft) {
	"use strict";

	return Object.extend("po.ui.controller.Application", {

        constructor: function(oComponent){
            this._oComponent = oComponent;
        },
        init: function(){

        }
    })
})