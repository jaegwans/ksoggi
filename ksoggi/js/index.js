$(document).ready(function(){
	$(window).bind('scroll', function() {
		var headerh = $('.header').height();
        var navh = $('.nav').height();
        var navHeight = headerh-navh;
		if ($(window).scrollTop() > navHeight) {
			$('.nav').addClass('fixed');
			$('.nav-1').addClass('toleft');
	
		
		 }
		else {
			$('.nav').removeClass('fixed');
			$('.nav-1').removeClass('toleft');
			
	
		 }
	});
});