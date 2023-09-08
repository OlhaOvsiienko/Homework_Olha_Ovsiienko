const colorElements = document.querySelectorAll('.color');
const sizeDropdown = document.getElementById('sizeDropdown');
const typeDropdown = document.getElementById('typeDropdown');
const priceElement = document.getElementById('outprice');

let currentPrice = 170;
let currentColor = 'blue';

function updatePrice() {
    const selectedSize = sizeDropdown.value;
    const selectedType = typeDropdown.value;
         
    let sizeCoefficient = 1;
    if (selectedSize === 'medium') {
        sizeCoefficient = 1.1;
    } else if (selectedSize === 'large') {
        sizeCoefficient = 1.2;
    }

    let typeCoefficient = 1;
    if (selectedType === 'outdoor') {
        typeCoefficient = 1.25;
    }
    
    const colorElement = document.querySelector(`.color[color="${currentColor}"]`);
    const newPrice = parseFloat(colorElement.getAttribute('data-price'));
   
    const updatedPrice = newPrice * sizeCoefficient * typeCoefficient;
    priceElement.textContent = updatedPrice.toFixed(2);
}

colorElements.forEach(function(colorElement) {
    colorElement.addEventListener('click', function() {
        
        currentColor = colorElement.getAttribute('color');
        
        updatePrice();

        colorElements.forEach(function(element) {
            element.classList.remove('active');
        });
        colorElement.classList.add('active');
    });
});

sizeDropdown.addEventListener('change', updatePrice);
typeDropdown.addEventListener('change', updatePrice);

const initialSize = sizeDropdown.value;
const initialType = typeDropdown.value;

updatePrice();
