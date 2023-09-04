const submitButton = document.querySelector('.btn');
const outBlock = document.querySelector('.out');
const inputElements = document.querySelectorAll('.arr');


submitButton.addEventListener('click', function() {
  
  const data = {};

  
  inputElements.forEach(function(input) {
    const fieldName = input.getAttribute('data-form');
    const value = input.value;
    data[fieldName] = value;
  });

  
  let outputText = '';
  for (const fieldName in data) {
    outputText += `${fieldName}: ${data[fieldName]}\n`;
  }

    outputText = outputText.replace(/\n/g, '<br>');

  outBlock.innerHTML = outputText;
});