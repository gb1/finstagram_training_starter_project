sap.ui.define(["sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"],
    function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("UI5Camera.controller.App", {

        onInit : function () {
            alert("Happy Wednesday!");
        }
    });
});