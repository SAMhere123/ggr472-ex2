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






































