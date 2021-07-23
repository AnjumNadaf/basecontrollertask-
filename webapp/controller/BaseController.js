sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function(Controller, JSONModel){
    "use strict";

    return Controller.extend("basecontrollertask.controller.BaseController",{
        onInit:function(){
            this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);

        },
        getbackend3:function(suceesss){
            debugger;
            
            var oJSONModel = new JSONModel();
            var that = this;

             var sURL = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
             var oModel = new sap.ui.model.odata.ODataModel(sURL,true);
             oModel.read("/ZADMIN_C_VIEW",{
                 success:function(data){
                 suceesss(data.results);
                  
                 

                 

                },error:function(error){
                   
                }
                
            })

        },
        getbackend2:function(){
            debugger;
            
            var oJSONModel = new JSONModel();
            var that = this;

             var sURL = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
             var oModel = new sap.ui.model.odata.ODataModel(sURL,true);
             oModel.read("/ZADMIN_C_VIEW",{
                 success:function(data){
                  oJSONModel.setData({
                    ZADMIN_C_VIEW:data.results
                  });
                 // that.getOwnerComponent().setModel(oJSONModel,"myModel1");
                  console.log(data.results)
                  //alert("Success");
                  that.onBackdata2(data.results);
                  
                 

                 

                },error:function(error){
                   
                }
                
            })

        },

        getBackendData:function(){
            debugger;
            
            var that = this;
            
          var opromise = new Promise((resolve,reject)=> {

            var oJSONModel = new JSONModel();
             var sURL = "/sap/opu/odata/sap/ZADMIN_C_VIEW_CDS/";
             var oModel = new sap.ui.model.odata.ODataModel(sURL,true);
             oModel.read("/ZADMIN_C_VIEW",{
                 success:function(data){
                  oJSONModel.setData({
                    ZADMIN_C_VIEW:data.results
                  });
                 // that.getOwnerComponent().setModel(oJSONModel,"myModel1");
                  console.log(data.results)
                  //alert("Success");
                 

                  resolve(data.results);

                },error:function(error){
                    reject(error);
                }
                
            })
          });

          opromise.then((successMessage) => {
            // successMessage is whatever we passed in the resolve(...) function above.
            // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
            console.log(successMessage);
          }).catch(function(error){

          });




        return opromise

    }
        
    });
});