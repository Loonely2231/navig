console.log('привет')
navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    console.log(coords);
});