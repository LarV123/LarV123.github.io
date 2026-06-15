(function () {
    // --- Scroll Reveal ---
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));

    // --- Navbar scroll behavior ---
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scroll-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 600) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // --- Smooth scroll for nav links ---
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // --- What I Do toggle ---
    const buttons = document.querySelectorAll('.show-button');
    buttons.forEach((btn) => {
        const whatIDo =
            btn.closest('.project').querySelector('.what-i-do');
        whatIDo.style.display = 'none';
        btn.addEventListener('click', () => {
            if (whatIDo.style.display === 'none') {
                whatIDo.style.display = 'block';
                btn.textContent = 'Hide';
                btn.style.borderColor = 'var(--accent)';
            } else {
                whatIDo.style.display = 'none';
                btn.textContent = 'What I Do ?';
                btn.style.borderColor = '';
            }
        });
    });

    // --- Lightbox ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    const lightboxPrev = lightbox.querySelector('.lightbox-prev');
    const lightboxNext = lightbox.querySelector('.lightbox-next');
    let currentGalleryImages = [];
    let currentIndex = 0;

    function openLightbox(src, gallery) {
        currentGalleryImages = Array.from(gallery).map((img) => img.src);
        currentIndex = currentGalleryImages.indexOf(src);
        lightboxImg.src = src;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function showPrev() {
        currentIndex =
            (currentIndex - 1 + currentGalleryImages.length) %
            currentGalleryImages.length;
        lightboxImg.src = currentGalleryImages[currentIndex];
    }

    function showNext() {
        currentIndex =
            (currentIndex + 1) % currentGalleryImages.length;
        lightboxImg.src = currentGalleryImages[currentIndex];
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', showPrev);
    lightboxNext.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
    });

    document.querySelectorAll('.img-panel').forEach((img) => {
        img.addEventListener('click', (e) => {
            const gallery = e.target.closest('.images').querySelectorAll('.img-panel');
            openLightbox(e.target.src, gallery);
        });
    });

    // --- Hero particles ---
    const particleContainer = document.getElementById('particles');

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = 60 + Math.random() * 40 + '%';
        particle.style.animationDuration = 6 + Math.random() * 6 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.width = particle.style.height =
            2 + Math.random() * 4 + 'px';
        particleContainer.appendChild(particle);
    }

    for (let i = 0; i < 30; i++) {
        createParticle();
    }
})();