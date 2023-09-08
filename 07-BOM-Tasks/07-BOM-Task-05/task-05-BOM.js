const myButton = document.getElementById('myButton');
        const messageDiv = document.getElementById('message');

        myButton.addEventListener('mouseover', () => {
            messageDiv.textContent = 'Mouse on me!';
        });

        myButton.addEventListener('mouseout', () => {
            messageDiv.textContent = 'Mouse is not on me!';
        });

        myButton.addEventListener('click', () => {
            messageDiv.textContent = 'I was pressed!';
        });