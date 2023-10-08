"use strict";

let birds = document.querySelectorAll(".birds img");
let forest = document.querySelector(".forest");
let water = document.querySelector(".water");
let exploreText = document.getElementById("explore-text");

window.addEventListener("scroll", function () {
    let value = window.scrollY;

    // Apply animation to birds
    birds.forEach((bird, index) => {
        bird.style.animationDelay = index * 0.5 + "s"; // Add delay for each bird
    });

    // Apply animation to forest and water
    forest.style.transform = `scale(${1 + value / 2000})`;
    water.style.transform = `translateY(${value / 10}%)`;
    exploreText.style.fontSize = 1.5 + value * 0.005 + "em";
    exploreText.style.transform = `translateY(-${value * 0.2}px)`;

    // Fade in "Explore" text
    if (value > 500) {
        explore.style.opacity = 1;
    } else {
        explore.style.opacity = 0;
    }
});
