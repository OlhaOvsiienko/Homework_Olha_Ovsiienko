const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const link = document.getElementById('link');
const body = document.body;

button1.addEventListener('click', function() {
    body.style.backgroundColor = 'blue';
});

button2.addEventListener('dblclick', function() {
    body.style.backgroundColor = 'pink';
});

button3.addEventListener('mousedown', function() {
    body.style.backgroundColor = 'brown';
});

button3.addEventListener('mouseup', function() {
    body.style.backgroundColor = 'white';
});

link.addEventListener('mouseenter', function() {
    body.style.backgroundColor = 'yellow';
});

link.addEventListener('mouseleave', function() {
    body.style.backgroundColor = 'white';
});