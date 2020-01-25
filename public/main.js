const helloElement = document.getElementById('hello');
const clickElement = document.getElementById('click');

hello.addEventListener('mouseover', (event) => {
    clickElement.textContent = '';
    helloElement.style.color = 'red';
});

hello.addEventListener('click', (event) => {
    clickElement.textContent = '';
    helloElement.textContent = 'こんにちは';
    helloElement.id = 'ja';
});