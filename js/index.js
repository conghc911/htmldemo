$(document).ready(function(){
	// slide
	

	$('.slider-home').owlCarousel({
		loop: true,
		margin: 10,
	    autoplay:true,
	    dots: false,
	    nav:false,
	    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    responsive: {
	    	0: {
	    		items: 1
	    	},
	    	600: {
	    		items: 1
	    	},
	    	1000: {
	    		items: 1
	    	}
	    }
	});
	
	$(".slide-prd-sidebar").slick({
	  dots: true,
	  vertical: true,
	  centerMode: true,
	  slidesToShow: 2,
	  slidesToScroll: 2,
	});
	


	$(".mobile").click(function(){
		$(".menu-nav").toggleClass('open');
	});
	$("span.book_close").click(function(){
		$("div#menu-tab").removeClass("open");
		$("div.book_overlay").css("display","none");
	});
	

});

var aboveHeight = $('#topheader').outerHeight();
console.log(aboveHeight);
$(window).scroll(function () {
    if ($(window).scrollTop() > aboveHeight) {
        $('div#menu').addClass('fixed');

    } else {
        $('div#menu').removeClass('fixed');
    }
});

