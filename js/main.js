
$(document).ready(function() {
	
	//alert('yep');
	
	$('#nav li').hover(function(){
		$(this).find('ul').stop().slideToggle();
	})
	
})
