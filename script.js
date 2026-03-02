// Dynamic Year in Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between menu and close
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('bx-menu');
        icon.classList.add('bx-x');
    } else {
        icon.classList.remove('bx-x');
        icon.classList.add('bx-menu');
    }
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('bx-x');
            icon.classList.add('bx-menu');
        }
    });
});

// Smooth Scrolling for anchor links (fallback/custom behavior)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Adjust for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll Animations (Intersection Observer)
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target); // Animate only once
        }
    });
}, observerOptions);

// Select all elements to animate
const fadeElements = document.querySelectorAll('.fade-in');
const slideElements = document.querySelectorAll('.slide-up');

fadeElements.forEach(el => observer.observe(el));
slideElements.forEach(el => observer.observe(el));

// Simple Typing Effect for Hero Title
const typingText = document.querySelector('.typing-text');
const textArray = ["AI/ML Engineer", "Frontend Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let newTextDelay = 2000; // Delay between current and next text

function type() {
    if (!typingText) return;
    
    // Support the bullet character &bull; or normal concatenation
    // But since it's an array, we'll just type one role, then the other, separated by a bullet
    // For a simpler approach, let's just make it type the full string: "AI/ML Engineer • Frontend Developer"
    
    // Actually, taking the existing text in HTML: "AI/ML Engineer &bull; Frontend Developer"
    // I will write a simple generic typing effect over a specific string.
    const fullText = "AI/ML Engineer • Frontend Developer";
    
    if (charIndex < fullText.length) {
        typingText.textContent += fullText.charAt(charIndex);
        charIndex++;
        setTimeout(type, 50); // fast typing speed
    } else {
        // finished typing
        typingText.innerHTML = "AI/ML Engineer &bull; Frontend Developer";
    }
}

// Clear existing text and start typing
if (typingText) {
    typingText.textContent = "";
    setTimeout(type, 1000); // Start after 1 second
}
