const colorElements = document.querySelectorAll('.color');
const priceElement = document.getElementById('outprice');

let currentPrice = parseFloat(priceElement.textContent);

function updatePrice() {
  priceElement.textContent = currentPrice.toFixed(2); 
}

colorElements.forEach(function(colorElement) {
  colorElement.addEventListener('click', function() {
    const newPrice = parseFloat(colorElement.getAttribute('data-price'));
    if (!isNaN(newPrice)) {
      currentPrice = newPrice;
      updatePrice();
    }
    
    colorElements.forEach(function(element) {
      element.classList.remove('active');
    });
    colorElement.classList.add('active');
  });
});

// Variation 1: size
const sizeDropdown = document.getElementById('sizeDropdown');
sizeDropdown.addEventListener('change', function() {
  const selectedSize = sizeDropdown.value;
  
  currentPrice += 10;
  updatePrice();
});

// Variation 2: type
const typeDropdown = document.getElementById('typeDropdown');
typeDropdown.addEventListener('change', function() {
  const selectedType = typeDropdown.value;
  
  currentPrice += 20;
  updatePrice();
});