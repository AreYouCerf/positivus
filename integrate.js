const processButt = document.querySelector('.accordion_consult_butt');
const processBlock = document.querySelector('.accordion_consult_info');

processButt.addEventListener('click', function () {
    processBlock.classList.toggle('show');
});

window.addEventListener('click', function (event) {
    if (!event.target.matches('.accordion_consult_butt')) {
        processBlock.classList.remove('show');
    }
});