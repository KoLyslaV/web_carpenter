document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navList = document.querySelector('nav ul');

    if (menuBtn && navList) {
        menuBtn.addEventListener('click', () => {
            navList.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', navList.classList.contains('active'));
        });

        // Close menu when clicking a link
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Before/After Slider Logic
    const sliderInput = document.getElementById('ba-slider-input');
    const imageBefore = document.querySelector('.ba-image-before');
    const handle = document.querySelector('.ba-handle');

    if (sliderInput && imageBefore && handle) {
        sliderInput.addEventListener('input', (e) => {
            const value = e.target.value;
            imageBefore.style.width = `${value}%`;
            handle.style.left = `${value}%`;
        });
    }

    // Smooth Scroll for Anchor Links (Polyfill-like behavior if CSS scroll-behavior fails or for offset calculation)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for sticky header
                const headerOffset = document.getElementById('main-header').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Handling (Demo)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Děkujeme za vaši poptávku! Ozveme se vám co nejdříve.');
            contactForm.reset();
        });
    }
});
