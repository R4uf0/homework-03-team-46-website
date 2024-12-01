/*
    Code sample for SITE 1101 Principles of Information Systems 
    (c)2024 by Araz Yusubov 
    DISCLAIMER: All code examples we will look at are quick hacks intended to present working prototypes.
    Hence they do not follow best practice of programming or software engineering.    
*/

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 80) {
        navbar.classList.add("navbar-small");
    } else {
        navbar.classList.remove("navbar-small");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    let dynamicGreeting = document.getElementById("dynamic-greeting");
    let currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    // Set greeting only in the <h6> tag
    dynamicGreeting.textContent = greeting;
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('artCanvas');
    const ctx = canvas.getContext('2d');

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function drawPolygon(x, y, radius, sides, rotation) {
        const angle = (2 * Math.PI) / sides;
        ctx.beginPath();
        for (let i = 0; i < sides; i++) {
            let xPos = x + radius * Math.cos(rotation + angle * i);
            let yPos = y + radius * Math.sin(rotation + angle * i);
            ctx.lineTo(xPos, yPos);
        }
        ctx.closePath();
        ctx.stroke();
    }

    function drawArt() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw a large polygon (a hexagon)
        drawPolygon(canvas.width / 2, canvas.height / 2, 300, 6, 0);

        // Draw smaller polygons inside the hexagon
        drawPolygon(canvas.width / 2, canvas.height / 2, 250, 5, Math.PI / 6);  // Draw a pentagon (6 sides)
        drawPolygon(canvas.width / 2, canvas.height / 2, 180, 10, Math.PI / 10);  // Draw a decagon (10 sides)
        drawPolygon(canvas.width / 2, canvas.height / 2, 140, 8, Math.PI / 8);  // Draw a octagon (8 sides)
        drawPolygon(canvas.width / 2, canvas.height / 2, 100, 9, Math.PI / 9);  // Draw a octagon (9 sides)
        drawPolygon(canvas.width / 2, canvas.height / 2, 80, 4, Math.PI / 4);   // Draw a square (4 sides)
        drawPolygon(canvas.width / 2, canvas.height / 2, 50, 7, Math.PI / 7);  // Draw a regtangel (8 sides)
    }

    // Call drawArt function to create the polygonal art
    drawArt();
});



