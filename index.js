const button = document.getElementById('switchMode');
const body = document.querySelector('body');

button.addEventListener('click', function (){
    body.classList.toggle('darkTheme');
})