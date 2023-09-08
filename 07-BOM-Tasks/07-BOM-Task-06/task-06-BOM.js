const widthElement = document.getElementById('width');
const heightElement = document.getElementById('height');

function updateDimensions() {
    widthElement.textContent = window.innerWidth;
    heightElement.textContent = window.innerHeight;
}

updateDimensions();

window.addEventListener('resize', updateDimensions);