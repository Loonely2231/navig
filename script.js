navigator.geolocation.getCurrentPosition(function(position) {
    coords = position.coords;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // let path = 'https://www.openstreetmap.org/#map=18/' + latitude + '/' + longitude;
    // let link = document.querySelector('.link');
    // link.innerHTML = "<a href='" + path + "'>Посмотреть местоположение</a>";
    // console.log(coords);
    let map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([longitude, latitude]),
            zoom: 10
        })
    })
});
