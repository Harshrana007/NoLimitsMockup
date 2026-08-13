/**
 * NO LIMIT Personal Training
 * Main JavaScript file for interactivity and dynamic features
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all features
    initMobileMenu();
    initStickyHeader();
    initFormValidation();
    initFAQAccordion();
    initTestimonialCarousel();
    initScrollAnimations();
    initSmoothScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (!mobileMenuBtn || !mainNav) return;

    mobileMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        mainNav.classList.toggle('active');
        updateMenuButtonState();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuBtn.contains(e.target) && !mainNav.contains(e.target)) {
            mainNav.classList.remove('active');
            updateMenuButtonState();
        }
    });

    // Close menu when clicking a link
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
            updateMenuButtonState();
        });
    });
}

function updateMenuButtonState() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const spans = mobileMenuBtn.querySelectorAll('span');
    
    if (mainNav.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

/**
 * Sticky Header on Scroll
 */
function initStickyHeader() {
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Form Validation and Submission
 */
function initFormValidation() {
    const heroForm = document.getElementById('heroForm');
    
    if (!heroForm) return;

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9-\s+()]{10,}$/;

    heroForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        
        // Clear previous errors
        clearErrors();
        
        // Validate fields
        let isValid = true;
        
        if (fullName.length < 2) {
            showError('nameError', 'Please enter a valid name');
            isValid = false;
        }
        
        if (!emailRegex.test(email)) {
            showError('emailError', 'Please enter a valid email');
            isValid = false;
        }
        
        if (!phoneRegex.test(phone)) {
            showError('phoneError', 'Please enter a valid phone number');
            isValid = false;
        }
        
        if (!isValid) return;
        
        // Submit form
        submitForm(heroForm, fullName, email, phone);
    });
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function clearErrors() {
    document.querySelectorAll('.form-error').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
}

function submitForm(form, name, email, phone) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalHTML = submitBtn.innerHTML;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'PROCESSING...';
    submitBtn.style.opacity = '0.7';
    
    // Simulate API call
    setTimeout(() => {
        // Show success state
        submitBtn.innerHTML = '✓ SESSION CLAIMED!';
        submitBtn.style.backgroundColor = '#10B981';
        
        // Log the submission (in real app, send to backend)
        console.log('Form submitted:', { name, email, phone });
        
        // Reset after delay
        setTimeout(() => {
            form.reset();
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.backgroundColor = '';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
            clearErrors();
        }, 3000);
    }, 1200);
}

/**
 * FAQ Accordion
 */
function initFAQAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isOpen = answer.classList.contains('open');
            
            // Close all other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherQuestion = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    otherQuestion.classList.remove('active');
                    otherAnswer.classList.remove('open');
                }
            });
            
            // Toggle current FAQ
            question.classList.toggle('active');
            answer.classList.toggle('open');
        });
    });
}

/**
 * Testimonial Carousel
 */
function initTestimonialCarousel() {
    const carousel = document.getElementById('testimonialCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cards = carousel.querySelectorAll('.testimonial-card');
    
    if (cards.length <= 1) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        return;
    }
    
    function showCard(index) {
        cards.forEach((card, i) => {
            card.style.display = i === index ? 'block' : 'none';
        });
    }
    
    function nextCard() {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    }
    
    function prevCard() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    }
    
    prevBtn.addEventListener('click', prevCard);
    nextBtn.addEventListener('click', nextCard);
    
    // Show first card
    showCard(0);
    
    // Auto-rotate every 5 seconds
    setInterval(nextCard, 5000);
}

/**
 * Scroll Animations (Intersection Observer)
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe fade-up elements
    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Ignore links that don't have a valid target
            if (href === '#' || !document.querySelector(href)) return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80; // Account for fixed header
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        });
    });
}

/**
 * Utility: Check if element is in viewport
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Performance: Lazy load images
 */
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Accessibility: Keyboard Navigation
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Close mobile menu on ESC
        if (e.key === 'Escape') {
            const mainNav = document.getElementById('mainNav');
            if (mainNav && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                updateMenuButtonState();
            }
        }
        
        // Navigation with arrow keys in carousel
        if (e.key === 'ArrowLeft') {
            const prevBtn = document.getElementById('prevBtn');
            if (prevBtn) prevBtn.click();
        }
        if (e.key === 'ArrowRight') {
            const nextBtn = document.getElementById('nextBtn');
            if (nextBtn) nextBtn.click();
        }
    });
}

/**
 * Track page analytics (optional)
 */
function trackEvent(eventName, eventData = {}) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log(`Event: ${eventName}`, eventData);
}

/**
 * Handle form submission with analytics
 */
window.addEventListener('load', () => {
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
        heroForm.addEventListener('submit', () => {
            trackEvent('free_session_claimed', {
                event_category: 'engagement',
                event_label: 'form_submission'
            });
        });
    }
    
    // Track CTA clicks
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', () => {
            trackEvent('cta_clicked', {
                event_category: 'engagement',
                event_label: btn.textContent.trim()
            });
        });
    });
});

/**
 * Initialize keyboard navigation on load
 */
window.addEventListener('load', initKeyboardNavigation);

/**
 * PWA Support - Service Worker registration (optional)
 */
if ('serviceWorker' in navigator) {
    // Uncomment to enable offline support
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered'))
    //     .catch(err => console.log('SW registration failed'));
}

/**
 * Console message for developers
 */
console.log('%c🏋️ NO LIMIT Personal Training', 'font-size: 16px; font-weight: bold; color: #D91616;');
console.log('%cBuilt with ❤️ for your fitness goals', 'color: #666;');
