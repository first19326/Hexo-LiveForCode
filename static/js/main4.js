/**
 * main4.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2014, Codrops
 * http://www.codrops.com
 */
(function() {

	var bodyEl = document.body,
		content = document.querySelector( '.content-wrap' ),
		openbtn = document.querySelector( '.menu-button-open' ),
		closebtn = document.querySelector( '.menu-button-close' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		steps = morphEl.getAttribute( 'data-morph-open' ).split(';');
		stepsTotal = steps.length;
		isAnimating = false;

	function init() {
		initEvents();
	}

	function initEvents() {
		openbtn.addEventListener( 'click', toggleMenu );
		if( closebtn ) {
			closebtn.addEventListener( 'click', toggleMenu );
		}

		// close the menu element if the target it's not the menu element or one of its descendants..
		content.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		} );
	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		$('.menu-wrap').show();
		
		var homeMarginLeft = $('#container').css('margin-left');
		homeMarginLeft = parseFloat(homeMarginLeft.replace(/px/g,''));
		
		if( isOpen ) {
			
			$('body').removeClass('show-menu');
			
			$('.content-wrap').fadeOut(300);
			$('body').css('overflow', 'auto');
			$("#content").off("touchmove");

			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false;
				// show menu button
				$(".menu-button-open").show(); 
			}, 300 );
		}
		else {
			// hide menu button
			$(".menu-button-open").hide();
			classie.add( bodyEl, 'show-menu' );
			
			// animate path
			var pos = 0,
				nextStep = function( pos ) {
					if( pos > stepsTotal - 1 ) {
						isAnimating = false; 
						return;
					}
					path.animate( { 'path' : steps[pos] }, pos === 0 ? 400 : 500, pos === 0 ? mina.easein : mina.elastic, function() { nextStep(pos); } );
					pos++;
				};
			
			$('.content-wrap').fadeIn(300);
			$('body').css('overflow', 'hidden');
			
			// 防止移动端滚动
			$("#content").on("touchmove",function(event){
				event.preventDefault;
			}, false)
			$(".content-wrap").on("touchmove",function(event){
				event.preventDefault;
			}, false)
			
			// 初始化滚动条到顶部
			$('.menu-wrap').optiscroll('scrollTo', false, 'top', 'auto');
			
			nextStep(pos);
		}
		isOpen = !isOpen;
	}

	init();

})();