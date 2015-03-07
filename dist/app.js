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

	 $(".menu li a").on('click', function() {
	     $(".menu").hide();
	 });

});