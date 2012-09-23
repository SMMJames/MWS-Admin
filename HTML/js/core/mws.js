/*
 * MWS Admin v1.5 - Core JS
 * This file is part of MWS Admin, an Admin template build for sale at ThemeForest.
 * All copyright to this file is hold by Mairel Theafila <maimairel@yahoo.com> a.k.a nagaemas on ThemeForest.
 * Last Updated:
 * April 29, 2012
 *
 */
 
(function($) {
	$(document).ready(function() {	
		
		/* Collapsible Panels */
		$(".mws-panel.mws-collapsible.mws-collapsed .mws-panel-body").css("display", "none");
		$(".mws-panel.mws-collapsible .mws-panel-header")
			.append("<div class=\"mws-collapse-button mws-inset\"><span></span></div>")
			.find(".mws-collapse-button span")
			.live("click", function(event) {
				$(this)
					.parents(".mws-panel")
					.toggleClass("mws-collapsed")
					.find(".mws-panel-body")
					.slideToggle("fast");
			});
	
		/* Side dropdown menu */
		$("div#mws-navigation ul li a, div#mws-navigation ul li span")
			.bind('click', function(event) {
				if($(this).next('ul').size() !== 0) {
					$(this).next('ul').slideToggle('fast', function() {
						$(this).toggleClass('closed');
					});
					event.preventDefault();
				}
			});
		
		/* Responsive Layout Script */
		
		$("div#mws-navigation").live('click', function(event) {
			if(event.target === this) {
				$(this).toggleClass('toggled');
			}
		});
		
		/* Form Messages */
	
		$(".mws-form-message").live("click", function() {
			$(this).animate({opacity:0}, function() {
				$(this).slideUp("medium", function() {
					$(this).css("opacity", '');
				});
			});
		});
		
		/* Message & Notifications Dropdown */
		$("div#mws-user-tools .mws-dropdown-menu a").click(function(event) {
			$(".mws-dropdown-menu.toggled").not($(this).parent()).removeClass("toggled");
			$(this).parent().toggleClass("toggled");
		});
		
		$('html').click(function(event) {
			if($(event.target).parents('.mws-dropdown-menu').size() == 0 ) {
				$(".mws-dropdown-menu").removeClass("toggled");
			}
		});
		
		/* Side Menu Notification Class */
		$(".mws-nav-tooltip").addClass("mws-inset");
		
		/* Table Row CSS Class */
		$("table.mws-table tbody tr:even").addClass("even");
		$("table.mws-table tbody tr:odd").addClass("odd");
		
		/* Adding title attribute to table header, toolbar buttons and wizard navigation */
		$("table.mws-table thead tr th, .mws-panel-toolbar ul li a, .mws-panel-toolbar ul li a span, .mws-wizard ul li a, .mws-wizard ul li span").each(function() {
			$(this).attr('title', $(this).text());
		});
		
		/* File Input Styling */
		
		if($.fn.customFileInput) {
			$("input[type='file']").customFileInput();
		}
		
		/* Chosen Select Box Plugin */
		
		if($.fn.chosen) {
			$("select.chzn-select").chosen();
		}
		
		/* Tooltips */
		
		if($.fn.tipsy) {
			var gravity = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
			for(var i in gravity)
				$(".mws-tooltip-"+gravity[i]).tipsy({gravity: gravity[i]});
				
			$('input[title], select[title], textarea[title]').tipsy({trigger: 'focus', gravity: 'w'});
		}
		
		/* Dual List Box */
		
		if($.configureBoxes) {
			$.configureBoxes();
		}
		
		if($.fn.placeholder) {
			$('[placeholder]').placeholder();
		}
	});
}) (jQuery);