/* ==========================================================================
   Design System & Variables
   ========================================================================== */
:root {
    /* Colors */
    --primary-red: #D91616;
    --primary-red-hover: #BF1313;
    --bg-dark: #000000;
    --bg-light: #F8F8F8;
    --text-white: #FFFFFF;
    --text-black: #111111;
    --text-gray: #666666;
    --border-light: #EBEBEB;
    
    /* Typography */
    --font-heading: 'Oswald', sans-serif;
    --font-body: 'Inter', sans-serif;
    
    /* Layout */
    --container-width: 1200px;
    --section-spacing: 5rem;
    
    /* Transitions */
    --transition-fast: 0.2s ease-in-out;
    --transition-smooth: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ==========================================================================
   Reset & Base
   ========================================================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: var(--font-body);
    color: var(--text-black);
    background-color: var(--text-white);
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 100%;
    max-width: var(--container-width);
    margin: 0 auto;
    padding: 0 1.5rem;
}

.text-red {
    color: var(--primary-red);
}

/* ==========================================================================
   Components
   ========================================================================== */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: var(--font-heading);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.875rem 1.5rem;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    transition: var(--transition-fast);
    font-size: 1rem;
}

.btn-primary {
    background-color: var(--primary-red);
    color: var(--text-white);
}

.btn-primary:hover {
    background-color: var(--primary-red-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(217, 22, 22, 0.3);
}

.btn-block {
    width: 100%;
    padding: 1.25rem;
    font-size: 1.125rem;
}

.btn-large {
    padding: 1.25rem 2.5rem;
    font-size: 1.25rem;
}

/* ==========================================================================
   Header & Navigation
   ========================================================================== */
.site-header {
    background-color: var(--bg-dark);
    color: var(--text-white);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    transition: var(--transition-smooth);
}

.site-header.scrolled {
    background-color: rgba(0, 0, 0, 0.95);
    backdrop-filter: blur(10px);
    padding: 0.25rem 0;
}

.header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
}

.brand-logo {
    display: flex;
    flex-direction: column;
}

.logo-main {
    font-family: var(--font-heading);
    font-size: 1.875rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0.02em;
}

.logo-sub {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    color: var(--text-white);
    margin-top: 0.25rem;
}

.main-nav {
    display: flex;
    align-items: center;
    gap: 2.5rem;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.nav-links a {
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    transition: var(--transition-fast);
}

.nav-links a:hover {
    color: var(--primary-red);
}

.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    cursor: pointer;
    flex-direction: column;
    gap: 5px;
    padding: 0.5rem;
}

.mobile-menu-btn span {
    display: block;
    width: 24px;
    height: 2px;
    background-color: var(--text-white);
    transition: var(--transition-fast);
}

/* ==========================================================================
   Hero Section
   ========================================================================== */
.hero {
    position: relative;
    min-height: 100vh;
    padding-top: 90px; /* Offset header */
    display: flex;
    align-items: center;
    color: var(--text-white);
    overflow: hidden;
}

.hero-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center right;
    z-index: 1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.2) 100%);
    z-index: 2;
}

.hero-container {
    position: relative;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
}

.hero-content {
    flex: 1;
    max-width: 600px;
}

.hero-title {
    font-family: var(--font-heading);
    font-size: clamp(3.5rem, 6vw, 5.5rem);
    font-weight: 700;
    line-height: 1.05;
    margin-bottom: 2rem;
    text-transform: uppercase;
}

.hero-subtitle p {
    font-size: clamp(1.125rem, 2vw, 1.25rem);
    font-weight: 500;
    line-height: 1.4;
    margin-bottom: 2.5rem;
}

.hero-benefits {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.hero-benefits li {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 1.125rem;
    font-weight: 500;
}

.hero-benefits svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
}

/* Hero Form */
.hero-form-wrapper {
    flex: 0 0 420px;
    animation: fadeInUp 0.8s ease-out forwards;
}

.lead-form-card {
    background: rgba(10, 10, 10, 0.7);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    padding: 2.5rem;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
}

.lead-form-card h2 {
    font-family: var(--font-heading);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
}

.lead-form-card p {
    font-size: 0.875rem;
    color: #CCC;
    margin-bottom: 2rem;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group input {
    width: 100%;
    padding: 1.125rem 1.25rem;
    font-family: var(--font-body);
    font-size: 1rem;
    background: var(--text-white);
    border: 1px solid transparent;
    border-radius: 4px;
    outline: none;
    transition: var(--transition-fast);
}

.form-group input:focus {
    border-color: var(--primary-red);
    box-shadow: 0 0 0 3px rgba(217, 22, 22, 0.2);
}

/* ==========================================================================
   Social Proof
   ========================================================================== */
.social-proof {
    background-color: var(--text-white);
    padding: 2rem 0;
    border-bottom: 1px solid var(--border-light);
}

.social-proof-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    align-items: center;
}

.proof-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.proof-item svg {
    color: var(--text-black);
    flex-shrink: 0;
}

.proof-text {
    display: flex;
    flex-direction: column;
}

.proof-text strong {
    font-family: var(--font-heading);
    font-size: 1.25rem;
    line-height: 1.1;
}

.proof-text span {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--text-gray);
    letter-spacing: 0.05em;
}

/* ==========================================================================
   Features Section
   ========================================================================== */
.features {
    padding: var(--section-spacing) 0;
    background-color: var(--text-white);
    text-align: center;
}

.section-title {
    font-family: var(--font-heading);
    font-size: 2.25rem;
    font-weight: 700;
    margin-bottom: 4rem;
    text-transform: uppercase;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
}

.feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.feature-icon {
    margin-bottom: 1.5rem;
    color: var(--text-black);
}

.feature-icon.text-red {
    color: var(--primary-red);
}

.feature-card h3 {
    font-family: var(--font-heading);
    font-size: 1.125rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    text-transform: uppercase;
}

.feature-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.4;
}

/* ==========================================================================
   Testimonial Section
   ========================================================================== */
.testimonial {
    padding: var(--section-spacing) 0;
    background-color: var(--bg-light);
}

.testimonial-container {
    display: grid;
    grid-template-columns: 1fr 1.5fr 1fr;
    gap: 4rem;
    align-items: center;
}

.testimonial-image img {
    border-radius: 4px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    object-fit: cover;
    aspect-ratio: 4/5;
}

.testimonial-content {
    position: relative;
    padding-left: 2rem;
    border-left: 4px solid var(--primary-red);
}

.quote-icon {
    margin-bottom: 1.5rem;
}

.quote-text {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text-black);
    margin-bottom: 1.5rem;
}

.quote-author {
    font-family: var(--font-heading);
    font-size: 1rem;
    font-weight: 700;
    font-style: normal;
    letter-spacing: 0.05em;
    color: var(--text-gray);
}

.testimonial-impact {
    padding-left: 3rem;
    border-left: 1px solid var(--border-light);
}

.testimonial-impact h2 {
    font-family: var(--font-heading);
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.1;
    text-transform: uppercase;
}

/* ==========================================================================
   Final CTA
   ========================================================================== */
.final-cta {
    position: relative;
    padding: 6rem 0;
    text-align: center;
    color: var(--text-white);
    background-color: var(--bg-dark);
}

.cta-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    z-index: 1;
    opacity: 0.4;
}

.cta-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 100%);
    z-index: 2;
}

.cta-container {
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.final-cta h2 {
    font-family: var(--font-heading);
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
}

.final-cta p {
    font-size: 1.25rem;
    line-height: 1.4;
    margin-bottom: 3rem;
    color: rgba(255,255,255,0.9);
}

/* ==========================================================================
   Animations
   ========================================================================== */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ==========================================================================
   Responsive Design
   ========================================================================== */

/* Tablet & Smaller Desktop */
@media (max-width: 1024px) {
    .hero-container {
        gap: 2rem;
    }
    
    .hero-title {
        font-size: 3.5rem;
    }
    
    .hero-form-wrapper {
        flex: 0 0 380px;
    }
    
    .social-proof-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem 1rem;
    }
    
    .proof-item {
        justify-content: flex-start;
        padding: 0 1rem;
    }

    .features-grid {
        grid-template-columns: repeat(3, 1fr);
        gap: 3rem 1.5rem;
    }
    
    .testimonial-container {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
    }
    
    .testimonial-impact {
        grid-column: 1 / -1;
        border-left: none;
        padding-left: 0;
        text-align: center;
        border-top: 1px solid var(--border-light);
        padding-top: 3rem;
    }
}

/* Mobile Devices */
@media (max-width: 768px) {
    :root {
        --section-spacing: 4rem;
    }
    
    /* Header Mobile */
    .mobile-menu-btn {
        display: flex;
    }
    
    .main-nav {
        position: fixed;
        top: 90px;
        left: 0;
        width: 100%;
        background-color: var(--bg-dark);
        flex-direction: column;
        padding: 2rem;
        gap: 2rem;
        transform: translateY(-150%);
        opacity: 0;
        transition: var(--transition-smooth);
        border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    
    .main-nav.active {
        transform: translateY(0);
        opacity: 1;
    }
    
    .nav-links {
        flex-direction: column;
        width: 100%;
        gap: 1.5rem;
    }
    
    .nav-cta {
        width: 100%;
    }

    /* Hero Mobile */
    .hero {
        align-items: flex-start;
        padding-top: 120px;
        height: auto;
    }

    .hero-bg {
        background-position: 70% center;
    }
    
    .hero-overlay {
        background: linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%);
    }
    
    .hero-container {
        flex-direction: column;
        padding-top: 0;
        gap: 3rem;
    }
    
    .hero-content {
        max-width: 100%;
    }
    
    .hero-form-wrapper {
        flex: 1 1 auto;
        width: 100%;
    }

    /* Features Mobile */
    .features-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }

    /* Testimonial Mobile */
    .testimonial-container {
        grid-template-columns: 1fr;
        gap: 2.5rem;
    }
    
    .testimonial-content {
        padding-left: 1.5rem;
    }
    
    .quote-text {
        font-size: 1.25rem;
    }
}

@media (max-width: 480px) {
    .social-proof-grid {
        grid-template-columns: 1fr;
    }
    
    .final-cta h2 {
        font-size: 2.25rem;
    }
    
    .final-cta p {
        font-size: 1.125rem;
    }
    
    .lead-form-card {
        padding: 1.5rem;
    }
}