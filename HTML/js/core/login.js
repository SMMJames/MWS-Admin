/*
 * MWS Admin v1.5 - Login JS
 * This file is part of MWS Admin, an Admin template build for sale at ThemeForest.
 * All copyright to this file is hold by Mairel Theafila <maimairel@yahoo.com> a.k.a nagaemas on ThemeForest.
 * Last Updated:
 * April 29, 2012
 *
 */
 
(function($) {
	$(document).ready(function() {	
		$("#mws-login-form form").validate({
			rules: {
				username: {required: true}, 
				password: {required: true}
			}, 
			errorPlacement: function(error, element) {  
			}, 
			invalidHandler: function(form, validator) {
				if($.fn.effect) {
					$("#mws-login").effect("shake", {distance: 6, times: 2}, 35);
				}
			}
		});
		
		if($.fn.placeholder) {
			$('[placeholder]').placeholder();
		}
	});
}) (jQuery);
