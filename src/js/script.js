document.addEventListener('DOMContentLoaded', ()=> {

    //Menu button
    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    const overlay = document.querySelector('.menu__overlay'),
          menuLinks = document.querySelectorAll('.menu__list a');

    menuLinks.forEach(item => {
        item.addEventListener('click', ()=> {
            menu.classList.remove('active');
        });

    });
          
    overlay.addEventListener('click', (e) => {
        if (e.target && e.target === overlay) {
            menu.classList.remove('active');
        }
    });

    //Skill bars
    const percent = document.querySelectorAll('.skills__percent'),
        progress = document.querySelectorAll('.skills__yellow-progress');

    percent.forEach((item, i) => {
        progress[i].style.width = item.innerText;
    });

    // Submit unblock

    const check = document.querySelector('.check'),
          btn = document.querySelector('.contacts__btn');

    check.addEventListener('click', () => {
            if (check.checked) {
                btn.disabled = false;
                btn.style.backgroundColor = '#FFA501';
            } else {
                btn.disabled = true;
                btn.style.backgroundColor = 'rgb(192, 191, 191)';
            }
    });
});