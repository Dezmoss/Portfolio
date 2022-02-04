const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.skills__percent'),
    progress = document.querySelectorAll('.skills__yellow-progress');

console.log(percent);
console.log(progress);

percent.forEach((item, i) => {
    progress[i].style.width = item.innerText;
});