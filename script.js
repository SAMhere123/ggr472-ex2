// Add a web map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaGVyZTEyMyIsImEiOiJjbWtkbnFtNXAwZW9iM2Zwcjc3eWZpMjFsIn0.xMGFvUR2mK0MK7uEbzr2MQ'; // Added default public map token from my Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/samhere123/cmlhtwwmm004q01s369o56w8b', //style URL
    center: [-79.431637, 43.639799], //starting position[lng, lat]
    zoom: 12, //starting zoom level
});

map.on('load', () => {

    // Add a data source from a linked GeoJSON file
    map.addSource('torontopublicparks-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/SAMhere123/SAMhere123.github.io/main/torontopublicparks.geojson'
    });

    // Visualize data layer on map
    map.addLayer({
        'id': 'torontopublicparks-layer',
        'type': 'circle',
        'source': 'torontopublicparks-data',
        'paint': {
            'circle-radius': 6,
            'circle-color': '#4e342e'
        }
    });
});