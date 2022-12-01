const imageContainer = document.getElementById('imgs');

const images = document.querySelectorAll('#imgs img');

let index = 0;

function run() {
    index++;
    if (index > images.length - 1) {
        index = 0;
    }
    imageContainer.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(run, 2000);