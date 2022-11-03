function initMap() {
  
  const munti = { lat: 14.4081327, lng: 121.0414667 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: munti,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: munti,
    map: map,
  });
}

window.initMap = initMap;