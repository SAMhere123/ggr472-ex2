const btn = document.getElementById("my-button");
btn.addEventListener("click", () => {
    // alert("You clicked me!")
    console.log("You clicked me!")
});
// An example

// Select all rating buttons
const buttons = document.querySelectorAll('.btn btn-outline-warning rating-star');
const StarCountDisplay = document.getElementById('count-star');

// Counter
let countStar = 0;

// Add click listener to each button
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        countStar++;
        StarCountDisplay.innerHTML = countStar;
    });
});

// Gave up trying to figure out why the star rating isn't counting

// Add a web map
mapbox.accessToken = 'pk.eyJ1Ijoic2FtaGVyZTEyMyIsImEiOiJjbWtkbnFtNXAwZW9iM2Zwcjc3eWZpMjFsIn0.xMGFvUR2mK0MK7uEbzr2MQ'; // Added default public map token from my Mapbox account

const map = new mapboxgl.Map({
    container: 'my map', // map container ID
    style: 'mapbox://styles/samhere123/cmlhtwwmm004q01s369o56w8b', //style URL
    center: [-79.39, 43.66], //starting position[lng, lat0]
    zoom: 12, //starting zoom
});






































