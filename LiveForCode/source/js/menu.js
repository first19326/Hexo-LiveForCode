(function() {

	var bodyEl = document.body,
		cover = document.querySelector( '.menu-cover' ),
		openbtn = document.querySelector( '.menu-button-open' ),
		closebtn = document.querySelector( '.menu-button-close' ),
		isOpen = false,

		morphEl = document.getElementById( 'morph-shape' ),
		s = Snap( morphEl.querySelector( 'svg' ) );
		path = s.select( 'path' );
		initialPath = this.path.attr('d'),
		steps = morphEl.getAttribute( 'data-morph-open' ).split( ';' );
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
		cover.addEventListener( 'click', function(ev) {
			var target = ev.target;
			if( isOpen && target !== openbtn ) {
				toggleMenu();
			}
		});
	}

	function toggleMenu() {
		if( isAnimating ) return false;
		isAnimating = true;
		$('.menu-wrap').show();
		
		var homeMarginLeft = $('#container').css( 'margin-left' );
		homeMarginLeft = parseFloat(homeMarginLeft.replace(/px/g, ''));
		
		if( isOpen ) {
			
			classie.remove( bodyEl, 'show-menu' );

			$('.menu-cover').fadeOut( 300 );
			$('body').css( 'overflow', 'auto' );

			// animate path
			setTimeout( function() {
				// reset path
				path.attr( 'd', initialPath );
				isAnimating = false;
				// show menu button
				$(".menu-button-open").show(); 
			}, 300 );
		} else {
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
			
			$('.menu-cover').fadeIn( 300 );
			$('body').css( 'overflow', 'hidden' );
			
			// 防止移动端滚动
			$(".menu-cover").on( "touchmove", function(event){
				event.preventDefault;
			}, false );

			// 将菜单滚动条移动至顶端
			$('.menu').scrollTop( 0 );
			
			nextStep( pos );
		}
		isOpen = !isOpen;
	}

	init();

})();