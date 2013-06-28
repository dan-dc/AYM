
/*************************************************************************

	AWARDS FOR YOUNG MUSICIANS
	
	Developed by Dan Moe & Ruyman Rodriguez 
	for Design Culture - http://www.design-culture.co.uk/ (c) 2013
	
	MODULE: 	styles.scss
	PURPOSE:	main site styles
	
*************************************************************************/

$(document).ready(function() {

/*************************************************************************
 *  Drop down navigation
*************************************************************************/
	$('#nav li').has('ul').addClass('drop-down') 
	//.append('<span class="drop-down">&rsaquo;</span>')
	
	$('#nav li').hover(function(){
		$(this).find('ul').stop().slideToggle();
	})
	
/*************************************************************************
 *  Isotope filter
*************************************************************************/

	var $container = $('#ItemsGallery');
	
	$container.isotope({
		filter: '*',
		animationOptions: {
		duration: 750,
		easing: 'linear',
		queue: false,
		}
		
	});

	$('#Filter a').click(function(){
		var selector = $(this).attr('data-filter');
		$container.isotope({ 
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false,
			}
		});
		return false;
	});
	
/*************************************************************************
 *  Cycle plugin
*************************************************************************/

    $('#Slider').cycle({
        fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
    });
	
    
}) // end doc ready()
