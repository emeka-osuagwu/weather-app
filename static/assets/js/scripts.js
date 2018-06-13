$(document).ready(function () {

    "use strict";

    // tilt
    $('.selective-box-lg').tilt({
    	scale: 1.1,
     	glare: true,
    	maxGlare: .6
	});

	$('.btn-white').tilt();


	// flow navigation
	$('body').on('click','.flow-navigation li a',function(event){
		var $anchor = $(this);

		$('html, body').animate({
			scrollTop: $($anchor.attr('href')).offset().top - 20
		}, 2000,'easeInOutQuart');
		
		event.preventDefault();
	});

	var navSelector = $(".scrollspy").data("scrollspy-nav");
	var navPositions = Array();

	$('*[data-spy]').each(function(){
		navPositions.push({id:$(this).attr('id') ,position: $(this).offset().top});
	});
	
	$(window).on("scroll",function(){
	
		if( $(window).scrollTop() >= 400 ) {
			$(".flow-navigation").addClass("fixed-nav");
		} else {
			$(".flow-navigation").removeClass("fixed-nav");
		}
		
		$.map(navPositions,function(key){
			if(key.position <= $(window).scrollTop() + 40 ){
				$(navSelector).find("a[href='#"+ key.id +"']").addClass("active");
			} else {
				$(navSelector).find("a[href='#"+ key.id +"']").removeClass("active");
			}
		});
	});
			
			
	// img 
	var scrollImage = 0;

	$("body").on("click",".img", function(){
		$("body").append('<div class="overlay"></div>');
		
		$(".overlay").animate({ opacity: '1' },30 , 'easeInOutExpo');
		var src = $(this).attr("src");

		$(".overlay").html('<div class="showcase" style="background-image:url('+ src +')"></div>');

		scrollImage = $(window).scrollTop();
	});




	$("body").on("click",".overlay",function(e){	
		$(".overlay").animate({ opacity: '0' },30 , 'easeOutQuint',function(){
			setTimeout(function(){
				$('.overlay').remove();	
			},500);
				
		});
		e.preventDefault();
		
	});

	// Accordion 
	$("body").on("click",".accordion li",function(e){
		if($(this).hasClass("active")) {
			$(this).removeClass("active");
			$(this).animate({
				height: 65,
			},300, 'easeInOutQuart');
		
		} else {

			$(this).parent().find("li").removeClass("active");
			$(this).addClass("active");
			$(this).parent().find("li").animate({
				height: 65,
			},300, 'easeInOutQuart');


			var h = $(this).find(".contents").outerHeight();

			$(this).animate({
				height: h + 80,
			},300, 'easeInOutQuart');

		}
		
	});

	// nav 
	$("body").on("click",".nav-controll",function(){
		$(".h nav").addClass("active-nav");
	});
	$("body").on("click",".close-nav",function(){
		$(".h nav").removeClass("active-nav");
	})


});