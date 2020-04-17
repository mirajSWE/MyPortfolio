
//Will not work unless own API is placed 


function initMap() {
         
    var direction = {lat: -87.655104, lng: 41.997939};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 5, center: direction});
          
    var marker = new google.maps.Marker({position: direction, map: map});}

    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"> 
    </script>

  