// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    mobileMenu.classList.toggle('translate-x-full');
    mobileMenu.classList.toggle('open');
    document.body.classList.toggle('overflow-hidden');
}

mobileMenuBtn.addEventListener('click', toggleMenu);
mobileMenuClose.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
});

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-dark/95');
        navbar.classList.remove('bg-dark/80');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-dark/95');
        navbar.classList.add('bg-dark/80');
    }
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-up, .scale-in').forEach(el => {
    observer.observe(el);
});

function sendEmail() {
    const Data = {
        to_email: "mohamed.abd3lrahman@gmail.com",
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: "Support",
        message: `
            name: ${document.getElementById('name').value}
            email: ${document.getElementById('email').value}
            phone: ${document.getElementById('phone').value}
            message: ${document.getElementById('message').value}
        `,
    };
    emailjs.send('service_ibig1oh', 'template_vk7elno', Data)
    .then(function(response) {
        alert('Email sent successfully!', response);
    })
    .catch(function(error) {
        alert('Email failed to send:', error);
    });
}

document.getElementById('btn').addEventListener('click', () => {
    sendEmail();
});