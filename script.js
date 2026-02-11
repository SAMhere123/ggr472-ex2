// Add a web map
mapboxgl.accessToken = 'pk.eyJ1Ijoic2FtaGVyZTEyMyIsImEiOiJjbWtkbnFtNXAwZW9iM2Zwcjc3eWZpMjFsIn0.xMGFvUR2mK0MK7uEbzr2MQ'; // Added default public map token from my Mapbox account

const map = new mapboxgl.Map({
    container: 'my-map', // map container ID
    style: 'mapbox://styles/samhere123/cmlhtwwmm004q01s369o56w8b', //style URL
    center: [-79.431637, 43.639799], //starting position[lng, lat]
    zoom: 12, //starting zoom level
});

map.on('load', () => {

    // Adding a data source containing GeoJSON data
    map.addSource('torontopublicparks-data')
        type: 'geojson',
        data: {
        "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "High Park",

                    },
                    "geometry": {
                        "coordinates": [
                            -79.463574,
                            43.646256
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Trinity Bellwoods Park",
                    },
                    "geometry": {
                        "coordinates": [
                            -79.413737,
                            43.647226
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Christie Pits Park",
                    },
                    "geometry": {
                        "coordinates": [
                            -79.420677,
                            43.664482
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Queen's Park",
                    },
                    "geometry": {
                        "coordinates": [
                            -79.392314,
                            43.664328
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "St. James Park",
                    },
                    "geometry": {
                        "coordinates": [
                            -79.373085,
                            43.650728
                        ],
                        "type": "Point"
                    }
                },
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Soraauren Avenue Park",
                    },
                    "geometry": {
                        "coordinates": [
                            -79.443328,
                            43.648471
                        ],
                        "type": "Point"
                    }
                }
            ]
    }
});