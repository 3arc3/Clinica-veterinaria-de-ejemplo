// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas las funcionalidades
    initNavigation();
    initScrollAnimations();
    initTestimonialSlider();
    initContactForm();
    initBackToTop();
    initSmoothScroll();
    initParallaxEffects();
    initLazyLoading();
    initAnimationsOnScroll();
});

// Navegación móvil
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.querySelector('.header');

    // Toggle del menú móvil
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animación del hamburger
        const lines = hamburger.querySelectorAll('.hamburger-line');
        if (hamburger.classList.contains('active')) {
            lines[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            lines[1].style.opacity = '0';
            lines[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });

    // Cerrar menú al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            const lines = hamburger.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        });
    });

    // Efecto de header al hacer scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            const lines = hamburger.querySelectorAll('.hamburger-line');
            lines[0].style.transform = 'none';
            lines[1].style.opacity = '1';
            lines[2].style.transform = 'none';
        }
    });
}

// Animaciones al hacer scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos con clase animate-on-scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    // Añadir clase a elementos que deben animarse
    const elementsToAnimate = document.querySelectorAll('.service-card, .team-card, .gallery-item, .contact-item');
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('animate-on-scroll');
        el.style.animationDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

// Slider de testimonios
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.testimonial-nav-btn.prev');
    const nextBtn = document.querySelector('.testimonial-nav-btn.next');
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.remove('active');
            if (i === index) {
                testimonial.classList.add('active');
            }
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', prevTestimonial);
        nextBtn.addEventListener('click', nextTestimonial);
    }

    // Auto-play del slider
    setInterval(nextTestimonial, 5000);
}

// Formulario de contacto
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar formulario
            if (validateForm(form)) {
                // Simular envío del formulario
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    submitBtn.textContent = '¡Mensaje enviado!';
                    submitBtn.style.background = 'linear-gradient(135deg, #4CAF50, #8BC34A)';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.style.background = '';
                        submitBtn.disabled = false;
                        form.reset();
                        removeValidationStyles(form);
                    }, 2000);
                }, 1500);
            }
        });

        // Validación en tiempo real
        const inputs = form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(input);
            });
            
            input.addEventListener('input', function() {
                if (input.parentElement.classList.contains('error')) {
                    validateField(input);
                }
            });
        });
    }
}

function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

function validateField(input) {
    const formGroup = input.parentElement;
    const value = input.value.trim();
    
    // Eliminar mensajes de error anteriores
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Validaciones específicas
    let isValid = true;
    let errorMessage = '';
    
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
        errorMessage = 'Este campo es obligatorio';
    } else if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
            errorMessage = 'Por favor, introduce un email válido';
        }
    } else if (input.type === 'tel' && value !== '') {
        const phoneRegex = /^[+]?[\d\s\-()]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
            errorMessage = 'Por favor, introduce un teléfono válido';
        }
    }
    
    // Actualizar estilos
    formGroup.classList.remove('error', 'success');
    
    if (!isValid) {
        formGroup.classList.add('error');
        const errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        errorElement.textContent = errorMessage;
        formGroup.appendChild(errorElement);
    } else if (value !== '') {
        formGroup.classList.add('success');
    }
    
    return isValid;
}

function removeValidationStyles(form) {
    const formGroups = form.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.classList.remove('error', 'success');
        const errorMessage = group.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
    });
}

// Botón de volver arriba
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 500) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Scroll suave para enlaces internos
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Efectos parallax
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        
        // Efecto parallax en el hero
        const hero = document.querySelector('.hero');
        if (hero) {
            const heroContent = hero.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            }
        }
    });
}

// Lazy loading de imágenes
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
}

// Animaciones adicionales al scroll
function initAnimationsOnScroll() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos que deben iniciar animación
    const animatedElements = document.querySelectorAll('.service-card, .team-card, .gallery-item');
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

// Efecto hover en tarjetas de servicios
document.addEventListener('DOMContentLoaded', function() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Añadir efecto de brillo
            this.style.boxShadow = '0 20px 40px rgba(124, 179, 66, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            // Restaurar sombra original
            this.style.boxShadow = '';
        });
    });
});

// Contador animado para estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current) + (counter.textContent.includes('%') ? '%' : '+');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (counter.textContent.includes('%') ? '%' : '+');
            }
        };
        
        updateCounter();
    });
}

// Iniciar contadores cuando la sección de estadísticas es visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// Efecto de typing en el título del hero
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Inicializar efecto de typing en el hero
const heroTitle = document.querySelector('.hero-title-highlight');
if (heroTitle) {
    const originalText = heroTitle.textContent;
    // typeWriter(heroTitle, originalText, 150);
}

// Preloader
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// Efecto de ripple en botones
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn')) {
        const button = e.target;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    }
});

// Añadir estilo para el efecto ripple
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Galería lightbox
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img class="lightbox-image" src="" alt="">
        </div>
    `;
    
    document.body.appendChild(lightbox);
    
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const img = this.querySelector('img');
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// Estilos para el lightbox
const lightboxStyle = document.createElement('style');
lightboxStyle.textContent = `
    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }
    
    .lightbox.active {
        opacity: 1;
        visibility: visible;
    }
    
    .lightbox-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
    }
    
    .lightbox-image {
        max-width: 100%;
        max-height: 90vh;
        border-radius: 10px;
    }
    
    .lightbox-close {
        position: absolute;
        top: -40px;
        right: 0;
        font-size: 2rem;
        color: white;
        cursor: pointer;
        transition: transform 0.3s ease;
    }
    
    .lightbox-close:hover {
        transform: scale(1.2);
    }
`;
document.head.appendChild(lightboxStyle);

// Inicializar lightbox
initLightbox();

// Validación de formulario mejorada
function enhanceFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Validación de nombre (solo letras y espacios)
    nameInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, '');
    });
    
    // Validación de teléfono (solo números, espacios y guiones)
    phoneInput.addEventListener('input', function() {
        this.value = this.value.replace(/[^0-9\s\-\+\(\)]/g, '');
    });
    
    // Límite de caracteres para el mensaje
    const maxLength = 500;
    const messageCounter = document.createElement('div');
    messageCounter.className = 'message-counter';
    messageCounter.textContent = `0/${maxLength} caracteres`;
    messageInput.parentElement.appendChild(messageCounter);
    
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        messageCounter.textContent = `${currentLength}/${maxLength} caracteres`;
        
        if (currentLength >= maxLength) {
            messageCounter.style.color = '#e74c3c';
        } else if (currentLength >= maxLength * 0.8) {
            messageCounter.style.color = '#f39c12';
        } else {
            messageCounter.style.color = '#7CB342';
        }
    });
    
    // Estilos para el contador
    const counterStyle = document.createElement('style');
    counterStyle.textContent = `
        .message-counter {
            font-size: 0.85rem;
            color: #7CB342;
            margin-top: 0.25rem;
        }
    `;
    document.head.appendChild(counterStyle);
}

// Mejorar validación del formulario
enhanceFormValidation();

// Efecto de partículas decorativas
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particles';
    hero.appendChild(particleContainer);
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 10 + 5}px;
            height: ${Math.random() * 10 + 5}px;
            background: rgba(124, 179, 66, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
        `;
        particleContainer.appendChild(particle);
    }
}

// Crear partículas decorativas
createParticles();

// Efecto de scroll progress bar
function createScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #7CB342, #8BC34A);
        width: 0%;
        z-index: 10001;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Crear barra de progreso de scroll
createScrollProgressBar();

// Notificaciones toast
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    const toastStyle = document.createElement('style');
    toastStyle.textContent = `
        .toast {
            position: fixed;
            bottom: 100px;
            right: 30px;
            padding: 1rem 2rem;
            border-radius: 10px;
            color: white;
            font-weight: 500;
            z-index: 10002;
            animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
            animation-fill-mode: forwards;
        }
        
        .toast-success {
            background: linear-gradient(135deg, #4CAF50, #8BC34A);
        }
        
        .toast-error {
            background: linear-gradient(135deg, #e74c3c, #c0392b);
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes fadeOut {
            from {
                opacity: 1;
            }
            to {
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(toastStyle);
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Accesibilidad: manejo de foco para navegación por teclado
document.addEventListener('keydown', function(e) {
    // Tab trap para modales
    if (e.key === 'Tab') {
        const lightbox = document.querySelector('.lightbox.active');
        if (lightbox) {
            const focusableElements = lightbox.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];
            
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    }
});

// Prefers reduced motion para accesibilidad
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-fast', '0s');
    document.documentElement.style.setProperty('--transition-medium', '0s');
    document.documentElement.style.setProperty('--transition-slow', '0s');
    
    // Desactivar animaciones automáticas
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.classList.add('animated');
    });
}

console.log('Veterinaria Vida Animal - Sitio web cargado correctamente');