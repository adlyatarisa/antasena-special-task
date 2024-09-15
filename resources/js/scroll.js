document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[data-scroll]');
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        root: null, 
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                updateActiveLink(id);
            }
        });
    }, observerOptions);

    function updateActiveLink(activeId) {
        links.forEach(link => {
            const linkId = link.getAttribute('href').substring(1);
            if (linkId === activeId) {
                link.classList.add('active');
                link.style.color = '#986CC5'; // Warna ungu
            } else {
                link.classList.remove('active');
                link.style.color = 'white';
            }
        });
    }

    sections.forEach(section => {
        observer.observe(section);
    });

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Trigger updateActiveLink for the initial state
    const initialActiveSection = document.querySelector('section:first-of-type');
    if (initialActiveSection) {
        updateActiveLink(initialActiveSection.id);
    }
});