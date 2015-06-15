$(document).ready(function(){
	
	function initialize() {
	  var myLatlng = new google.maps.LatLng(44.083278,-79.705220);
	  var mapOptions = {
	    zoom: 11,
	    scrollwheel: false,
	    center: myLatlng
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

	  var contentString = '<div id="content">'+
	      '<div id="siteNotice">'+
	      '</div>'+
	      '<h1 id="firstHeading" class="firstHeading">The Club at Bond Head</h1>'+
	      '<div id="bodyContent">'+
	      '<p>4805 7th Line </p>'+
	      '<p>Bond Head, ON L0G 1B0 Canada</p>'+
	      '</div>'+
	      '</div>';

	  var infowindow = new google.maps.InfoWindow({
	      content: contentString
	  });

	  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: 'The Club at Bond Head'
	  });
	  google.maps.event.addListener(marker, 'click', function() {
	    infowindow.open(map,marker);
	  });
	}

	google.maps.event.addDomListener(window, 'load', initialize);

});

