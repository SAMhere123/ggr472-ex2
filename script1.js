// Add a web map
mapbox.accessToken = 'YourTokenHere';

const map = new mapboxgl.Map({
    container: 'my-map',// map container ID
    style: 'mapbox://styles/mapbox/standard',//style URL
    center: [-79.39, 43.66],//starting position[lng, lat0]
    zoom: 12,//starting zoom
});