sap.ui.define([
	"abapconf/web/abapconf/controller/BaseController",
	"abapconf/web/abapconf/model/models",
	"sap/m/library"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (BaseController, models, mobileLibrary) {
		"use strict";

		var URLHelper = mobileLibrary.URLHelper;

		return BaseController.extend("abapconf.web.abapconf.controller.footer.Footer", {
			onInit: function () {
				
				this.setModel(models.createFooterViewModel(), "footerView");

				this._checkForCookieNotice();
            },
            
            doNavigation: function($event, sTarget) {
                this.navTo(sTarget);
            },


			/**
			 * Send E-Mail to abapconf@gmail.com
			 * 
			 * @param {sap.ui.Event} oEvent press event
			 */
			handleEmailPress: function (oEvent) {
				URLHelper.triggerEmail("abapconf@gmail.com", "Information about ABAPConf 2021", false, false, false, true);
            },
            
            /**
             * Open link to Eventbrite event page
             * 
             */
            pressEventbrite: function (oEvent) {
                window.open( "https://www.eventbrite.com/e/abapconf-2021-registration-137607215887","_blank");
            },

            /**
             * Open link to twitter account abapconf
             * 
             */
            pressTwitter: function (oEvent) {
                window.open( "https://twitter.com/abapconf","_blank");
            },

			/**
			 * Confirm the cookie notice
			 * 
			 * When the user clicks on the X to close the message strip with hte cookie notice text, this method is called
			 * It sets a cookie to acknowledge that the messaage was read. The user will then not see the cookie notice 
			 * message strip for one year. That is the lifetime of the cookie.
			 * 
			 * @public
			 */
			confirmCookieNotice: function() {
				document.cookie = "abapconfcookienotice=true; max-age=31536000";
			},

			/**
			 * Checks if the user already indirectly confirmed the cookie notice
			 * The method checks if a cookie named abapconfcookienotice exists. If so, the property showCookieNotice of the model
			 * footerView is set accordingly. This hides or shows the message stripe with the cookie notice text
			 * 
			 * @private
			 */
			_checkForCookieNotice: function() {
				var oModel = this.getModel("footerView");
			
				if (document.cookie.split(';').some(function(item) {
					return item.trim().indexOf('abapconfcookienotice=') == 0
				})) {
					oModel.setProperty("/showCookieNotice", false);
				} else {
					oModel.setProperty("/showCookieNotice", true);
				}
			}
            
		});
	});
