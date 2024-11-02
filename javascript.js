// script.js

// Array of event images
const images = ["event1.jpg", "event2.jpeg", "event3.jpg", "event4.jpg", "event5.jpg"];
let currentImageIndex = 0;

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.getElementById("carousel-image").src = images[currentImageIndex];
}
