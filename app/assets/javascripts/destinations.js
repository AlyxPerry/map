$(document).ready(function() {
	function initialize() {
		var myCoords = new google.maps.LatLng(latitude, longitude)

		var mapOptions = {
			center: myCoords,
			zoom:8
		}



		var map = new google.maps.Map(document.getElementById('destination-map'), mapOptions);

		
		var marker = new google.maps.Marker({
			position: myCoords,
			map: map,
			title: address
		})

		var contentString = address

		var infoWindow = new google.maps.InfoWindow({
			content: contentString
		})

		google.maps.event.addListener(marker, 'click', function() {
			infoWindow.open(map,marker)
		})

	}

	google.maps.event.addDomListener(window, 'load', initialize);
})