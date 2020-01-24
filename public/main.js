const helloElement = document.getElementById('hello');
const clickElement = document.getElementById('click');

hello.addEventListener('click', (event) => {
    clickElement.textContent = '';
    helloElement.textContent = 'こんにちは';
    helloElement.id = 'ja';
});

