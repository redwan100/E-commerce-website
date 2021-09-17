const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);


    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav__toggle', 'nav__menu')

// ======= Remove Mobile ==========
const links = document.querySelectorAll('.nav__link');
const navMenu = document.getElementById('nav__menu');

function linkAction() {
    navMenu.classList.remove('show');
}

links.forEach((link) => link.addEventListener('click', linkAction))


// =========== scroll section active link ==================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionHeight = section.offsetHeight 
        const sectionTop = section.offsetTop - 50;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
            document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.add('active');
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId +"]").classList.remove('active');
        }
    })
}


// =============== Header color change =======================

window.addEventListener('scroll', () => {
    const nav = document.getElementById('header');
    if (this.scrollY >= 650) {
        nav.classList.add('scroll__header');
    } else {
        nav.classList.remove('scroll__header');
    }
})




