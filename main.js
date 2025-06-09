// Menu Hambúrguer
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
});

// Rolagem Suave
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navbarHeight = document.querySelector('nav').offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight,
            behavior: 'smooth'
        });


        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').classList.remove('active');
            document.querySelector('.menu-toggle').classList.remove('active');
        }
    });
});

document.querySelector('.cta-button').addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const navbarHeight = document.querySelector('nav').offsetHeight;

    window.scrollTo({
        top: targetElement.offsetTop - navbarHeight,
        behavior: 'smooth'
    });
});

// Animação de Fade-In no Cabeçalho
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero');
    setTimeout(() => {
        hero.classList.add('active');
    }, 100);
});

// Destaque na Navbar ao Rolar
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, header');
    const navLinks = document.querySelectorAll('.nav-links a');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// Animação de Slide-In nas Seções
const animateElements = document.querySelectorAll('.benefit-card, .plan-card, .testimonial-card, footer, .about-text, .about-image');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.4
});

animateElements.forEach(element => {
    observer.observe(element);
});