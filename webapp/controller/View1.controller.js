sap.ui.define([
	// "sap/ui/core/mvc/Controller"
	"basecontrollertask/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController) {
		"use strict";

		return BaseController.extend("basecontrollertask.controller.View1", {
			onInit: function () {
				this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);

				//  this.oRouter.attachRoutePatternMatched(this.onGetD, this);

				// this.oRouter = new sap.ui.core.UIComponent.getRouterFor(this);

				// this.oRouter.attachRoutePatternMatched(this.onGetEmpData,this);

			},

			onGetData:function(oEvent){
				debugger;

					var that=this;
				var myFirstPromise = new Promise((resolve, reject) => {
					
					var dataobject = that.getBackendData();
					if(dataobject){

						resolve(dataobject)  // Yay! Everything went well!
					}else{
						reject("error")
					}
	
				  })
				  
				  myFirstPromise.then((successMessage) => {
					sap.m.MessageToast.show(successMessage[2].Empfirstname)
					console.log("Yay! " + successMessage)
				  }).catch(function(error){console.log(error)});

				  console.log("before execute")
			},


			onGetData2:function(data){
				debugger;
				sap.m.MessageToast.show("Your Name" + data[2].Empfirstname );
			},
           

			onGetdata2:function(){
				debugger;
				this.getbackend2();


			},
			onBackdata2:function(data){
				debugger;
				sap.m.MessageToast.show("Your Name is " + data[2].Empfirstname);
			},

			onData:function(){
				debugger;
				var success = function(data){
					sap.m.MessageToast.show("Your name" + data[2].Empfirstname);
                     
				}
				this.getbackend3(success);
			},
			onChangecolor:function(){
				debugger;
				var button = this.getView().byId("color2").getType();
				if(button == "Emphasized"){
				this.getView().byId("color2").setType("Reject");
				}else{
					this.getView().byId("color2").setType("Emphasized");
				}

			}


		});
	});
