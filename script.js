// Global Error Handler
window.addEventListener('error', function(e) {
    console.error('Error:', e.message, 'in', e.filename, 'line:', e.lineno);
});

// Preloader with Timeout
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.display = 'none';
        }
    }, 3000); // Fallback timeout 3 sec
});

// Mobile Menu with Safety Check
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Adjust for fixed header
            const position = target.offsetTop - offset;
            
            window.scrollTo({
                top: position,
                behavior: 'smooth'
            });
        }
    });
});

// AOS Initialization
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        once: true,
        offset: 120
    });
} else {
    console.warn('AOS library not loaded!');
}

// Scroll to Top
const scrollTop = document.querySelector('.scroll-top');
if (scrollTop) {
    window.addEventListener('scroll', () => {
        scrollTop.classList.toggle('show', window.scrollY > 500);
    });

    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Services Data and Render
const servicesData = [
    { title: 'Строительство домов', icon: '🏠', description: 'Полный цикл строительства частных домов' },
    { title: 'Ремонт квартир', icon: '🛠️', description: 'Капитальный и косметический ремонт' },
    { title: 'Дизайн интерьеров', icon: '🎨', description: 'Профессиональное проектирование интерьеров' },
    { title: 'Инженерные системы', icon: '⚙️', description: 'Монтаж коммуникаций и инженерных сетей' }
];

const servicesGrid = document.querySelector('.services-grid');
if (servicesGrid) {
    const fragment = document.createDocumentFragment();
    
    servicesData.forEach(service => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.innerHTML = `
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        fragment.appendChild(card);
    });
    
    servicesGrid.appendChild(fragment);
}

// Portfolio Data with Image Dimensions
const portfolioData = [
    { 
        category: 'house',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&auto=format',
        title: 'Загородный дом',
        description: 'Современный дизайн, 250 м²',
        width: 800,
        height: 600
    },
    // ... остальные элементы с аналогичной структурой
];

// Portfolio Render
const portfolioGrid = document.querySelector('.portfolio-grid');
if (portfolioGrid) {
    const fragment = document.createDocumentFragment();
    
    portfolioData.forEach(item => {
        const container = document.createElement('div');
        container.className = 'portfolio-item';
        container.dataset.category = item.category;
        container.innerHTML = `
            <img src="${item.image}" 
                 alt="${item.title}" 
                 width="${item.width}" 
                 height="${item.height}"
                 loading="lazy">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;
        fragment.appendChild(container);
    });
    
    portfolioGrid.appendChild(fragment);
}

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            document.querySelectorAll('.portfolio-item').forEach(item => {
                item.style.display = (filter === 'all' || item.dataset.category === filter) 
                    ? 'block' 
                    : 'none';
            });
        });
    });
}

// Contact Form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add actual form submission logic here
        alert('Спасибо за ваше сообщение! Мы свяжемся с вами в течение 24 часов.');
        this.reset();
    });
}
