let index = 0;
const screens = document.querySelectorAll(".screen");
const container = document.querySelector(".screen-container");

function scrollScreens() {
    index = (index + 1) % screens.length;
    container.style.transform = `translateY(-${index * 600}px)`;
}

// Auto-scroll every 3 seconds
setInterval(scrollScreens, 3000);
