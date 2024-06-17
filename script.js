document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar-background");

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight + 1, // Adjusted scroll position
                behavior: 'smooth'
            });
        }
    }

    navLinks.forEach(link => {
        link.addEventListener('click', scrollToSection);
    });

    function updateActiveNavLink() {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (window.scrollY >= sectionTop - navbarHeight + 1) {
                currentSection = `#${section.id}`;
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentSection) {
                link.classList.add('active');
            }
        });
    }

    document.addEventListener('scroll', updateActiveNavLink);
    window.addEventListener('resize', updateActiveNavLink); // Handle resize events
});
