// Add a web map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaGVyZTEyMyIsImEiOiJjbWtkbnFtNXAwZW9iM2Zwcjc3eWZpMjFsIn0.xMGFvUR2mK0MK7uEbzr2MQ'; // Added default public map token from my Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/samhere123/cmlhtwwmm004q01s369o56w8b', //style URL
    center: [-79.43, 43.64], //starting position[lng, lat]
    zoom: 12, //starting zoom level
});