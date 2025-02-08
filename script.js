// Preloader
window.addEventListener('load', () => {
    document.querySelector('.preloader').style.display = 'none';
});

// Mobile Menu
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('active');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll Animation (AOS)
AOS.init({
    duration: 1000,
    once: true
});

// Scroll to Top
window.addEventListener('scroll', () => {
    const scrollTop = document.querySelector('.scroll-top');
    if (window.scrollY > 500) {
        scrollTop.classList.add('show');
    } else {
        scrollTop.classList.remove('show');
    }
});

document.querySelector('.scroll-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Services Data
const servicesData = [
    { title: 'Строительство домов', icon: '🏠', description: 'Полный цикл строительства частных домов' },
    { title: 'Ремонт квартир', icon: '🛠️', description: 'Капитальный и косметический ремонт' },
    { title: 'Дизайн интерьеров', icon: '🎨', description: 'Профессиональное проектирование интерьеров' },
    { title: 'Инженерные системы', icon: '⚙️', description: 'Монтаж коммуникаций и инженерных сетей' }
];

// Render Services
const servicesGrid = document.querySelector('.services-grid');
servicesData.forEach(service => {
    servicesGrid.innerHTML += `
        <div class="service-card" data-aos="zoom-in">
            <div class="service-icon">${service.icon}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `;
});

// Portfolio Data
const portfolioData = [
    { 
        category: 'house',
        image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6',
        title: 'Загородный дом',
        description: 'Современный дизайн, 250 м²'
    },
    {
        category: 'apartment',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7',
        title: 'Лофт-апартаменты',
        description: 'Москва, 120 м²'
    },
    {
        category: 'commercial',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
        title: 'Бизнес-центр',
        description: 'Стекло и бетон, 5000 м²'
    },
    {
        category: 'house',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
        title: 'Экодом',
        description: 'Каркасная технология'
    },
    {
        category: 'apartment',
        image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba',
        title: 'Дизайнерская кухня',
        description: 'Индивидуальный проект'
    }
];

// Render Portfolio
const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioData.forEach(item => {
    portfolioGrid.innerHTML += `
        <div class="portfolio-item" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
let portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filter = btn.dataset.filter;
        portfolioItems.forEach(item => {
            item.style.display = (filter === 'all' || item.dataset.category === filter) 
                ? 'block' 
                : 'none';
        });
    });
});

// Form Submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в течение 24 часов.');
    this.reset();
});