AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true
});

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.borderBottom = '1px solid #00c853';
    } else {
        navbar.style.borderBottom = '1px solid #1a1a1a';
    }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== ACTIVE NAV LINK =====
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    sections.forEach(section => {
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-link[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// ===== MEETING FORM =====
document.querySelector('.meeting button').addEventListener('click', function () {
    alert('✅ Meeting booked successfully! We will contact you soon.');
});

// ===== CONTACT FORM =====
document.querySelector('.contact button').addEventListener('click', function () {
    alert('📨 Message sent successfully! We will get back to you soon.');
});

// ===== SCROLL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.service-card, .portfolio-card, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.innerText = target.toLocaleString() + '+';
            clearInterval(timer);
        } else {
            element.innerText = Math.floor(start).toLocaleString() + '+';
        }
    }, 16);
}

// Observer for counter
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(document.querySelector('.stat:nth-child(1) h3'), 129000, 2000);
            animateCounter(document.querySelector('.stat:nth-child(2) h3'), 98, 2000);
            animateCounter(document.querySelector('.stat:nth-child(3) h3'), 50, 2000);
            counterObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.about-stats');
if (statsSection) counterObserver.observe(statsSection);

// ===== DARK/LIGHT MODE =====
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function () {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        themeToggle.innerText = '☀️';
    } else {
        themeToggle.innerText = '🌙';
    }
});

// ===== LOADER =====
window.addEventListener('load', function () {
    setTimeout(() => {
        document.getElementById('loader').classList.add('hidden');
    }, 1800);
});

// ===== SCROLL TO TOP =====
window.addEventListener('scroll', function () {
    const scrollBtn = document.getElementById('scrollTop');
    if (window.scrollY > 500) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

document.getElementById('scrollTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== FORM VALIDATION =====
document.querySelector('.meeting button').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.meeting .form-input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            valid = false;
        } else {
            input.style.borderColor = '#00c853';
        }
    });

    if (valid) {
        alert('✅ Meeting booked successfully! We will contact you soon.');
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '#2a2a2a';
        });
    } else {
        alert('❌ Please fill all fields!');
    }
});

document.querySelector('.contact button').addEventListener('click', function () {
    const inputs = document.querySelectorAll('.contact .form-input');
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            valid = false;
        } else {
            input.style.borderColor = '#00c853';
        }
    });

    if (valid) {
        alert('📨 Message sent successfully! We will get back to you soon.');
        inputs.forEach(input => {
            input.value = '';
            input.style.borderColor = '#2a2a2a';
        });
    } else {
        alert('❌ Please fill all fields!');
    }
});

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        const faqItem = this.parentElement;
        const isActive = faqItem.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });

        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});