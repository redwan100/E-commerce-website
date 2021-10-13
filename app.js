// TODO: ============== NAV BAR TOGGLE ===============
const showMenu = (toggleId, navId) => {
    const toggle = document.querySelector(toggleId);
    const nav = document.querySelector(navId);

    if (toggleId && navId) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}

showMenu('#nav__toggle', '#nav__menu');

// TODO: ============= REMOVE MENU MOBILE RESPONSIVE =========
const links = document.querySelectorAll('.nav__link');
const navMenu = document.querySelector('.nav__menu');

const linkAction = () => {
    navMenu.classList.remove('show');
}



links.forEach((link) => {
    link.addEventListener('click', linkAction)
});


// =========== NAV LINK ADD ANIMATION =================

const navItem = document.querySelectorAll(".nav__item")
navItem.forEach((link, index) => {
    if (link.style.animation) {
        link.style.animation = '';
    } else {
        link.style.animation = `navLinksFade 0.3s ease forwards ${index / 3 + 1}s`
    }
})

// TODO: =========== SCROLL SECTIONS ACTIVE LINK ==============
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollTop = window.pageYOffset;
    
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollTop > sectionTop && scrollTop <= sectionTop + sectionHeight) {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add('active');
            
        } else {
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove('active');
            
        }
    })
}


// TODO: ================ SCROLL TO HEADER COLOR CHANGE =============
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#header');
    const scrollY = window.scrollY;
    if (scrollY > 650) {
        nav.classList.add('scroll__header');
    } else {
        nav.classList.remove('scroll__header');
    }
})



// TODO: ================ CLICK TO TOP SCRIPT =============


const topBtn = document.querySelector('.top-btn');
topBtn.addEventListener('click', () => {
    window.scrollTo(0,0)
})

window.addEventListener('scroll', () => {
    const progressLine = document.querySelector('.progress__line');
    const progressBar = document.querySelector('.progress__bar');
    const scrollTop = window.scrollY;

    if (scrollTop > 50) {
        progressBar.style.opacity = '1';
    } else {
        progressBar.style.opacity = '0';
    }


    // ======== CUSTOM PROGRESS BAR SCRIPT ==========
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const progressHeight = window.pageYOffset / totalHeight * 100;
    progressLine.style.height = progressHeight + '%';

    // ====== CLICK TO SCROLL TOP ========
    if (scrollTop > 500) {
        topBtn.classList.add('top__active');
    } 
    else {
        topBtn.classList.remove('top__active');
    }
})




