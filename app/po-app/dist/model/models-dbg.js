sap.ui.define([
  "sap/ui/model/json/JSONModel"
], function(JSONModel) {
  "use strict";
  return {
    createDummyModel: function() {
      return new JSONModel({
        POData: []
      });
    }
  };
});
