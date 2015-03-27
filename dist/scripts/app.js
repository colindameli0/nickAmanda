$(document).ready(function(){

	//GOOGLE MAPS API

	function initialize() {
	  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
	  var mapOptions = {
	    zoom: 14,
	    scrollwheel: false,
	    center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'Hello World!'
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);

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

	 if ($(window).width() < 767) {
		 $(".menu li a").on('click', function() {
		     $(".menu").hide();
		 });
	 }


	 $(function(){
  var $elems = $('.animateblock');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $(window).scroll(function(){
    animate_elems();
  });
  
  function animate_elems() {
    wintop = $(window).scrollTop(); // calculate distance from top of window
 
    // loop through each item to check when it animates
    $elems.each(function(){
      $elm = $(this);
      
      if($elm.hasClass('animated')) { return true; } // if already animated skip to the next item
      
      topcoords = $elm.offset().top; // element's distance from top of page in pixels
      
      if(wintop > (topcoords - (winheight*.75))) {
        // animate when top of the window is 3/4 above the element
        $elm.addClass('animated');
      }
    });
  } // end animate_elems()
});


});