const circleElements = document.querySelectorAll('.circle');

circleElements.forEach(function(circleElement) {
  const dataAnimValue = circleElement.getAttribute('data-anim');
  const currentClass = circleElement.className;

  circleElement.className = currentClass + ' ' + dataAnimValue;
});

const itemsElements = document.querySelectorAll('.items');

itemsElements.forEach(function(itemElement) {
  const paragraphElement = itemElement.querySelector('p');
  if (paragraphElement) {
    paragraphElement.textContent = 'Animation applied successfully';
  }
});
