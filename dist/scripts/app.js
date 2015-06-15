$(document).ready(function(){

	//STICKY NAV
	$("nav").sticky({ 
		topSpacing: 0 
	});

	//SMOOTH SCROLL MENU TOGGLE
	$('a[href^="#"]').click(function(e) {
	  var target = $(this.hash);
	  if (target.length === 0) target = $('a[name="' + this.hash.substr(1) + '"]');
	  if (target.length === 0) target = $('html');
	  $('html, body').animate({
	      scrollTop: target.offset().top -85
	  }, 500);
	  return false;
	});

	//MOBILE MENU
	$('.menu-icon').click(function(e){
		e.preventDefault();
		$('.menu').slideToggle(500);
	});

	$(function(){
		var $elems = $('.animateblock');
		var winheight = $(window).height();
		var fullheight = $(document).height();

	$(window).scroll(function(){
		animate_elems();
	});

	//ANIMATION
	function animate_elems() {
		wintop = $(window).scrollTop(); // calculate distance from top of window
		// loop through each item to check when it animates
		$elems.each(function(){
			$elm = $(this);
	  		if($elm.hasClass('animated')) { 
	  			return true; 
	  		} // if already animated skip to the next item
	  		topcoords = $elm.offset().top; // element's distance from top of page in pixels
			if(wintop > (topcoords - (winheight*.75))) {
				// animate when top of the window is 3/4 above the element
				$elm.addClass('animated');
			}
		});
	} 
	});


    $("#showMe").hide(); //hide your div initially
    var topOfOthDiv = $("#wrap").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#showMe").show(); //reached the desired point -- show div
        }
        if($(window).scrollTop() < topOfOthDiv) { //scrolled past the other div?
            $("#showMe").hide(); //reached the desired point -- show div
        }  
    });

    if ($(window).width() < 700) {
    	$("#showMe").css("display", 'none');
    }else{
    	$("#showMe").css("diplay", 'block');
    }

});