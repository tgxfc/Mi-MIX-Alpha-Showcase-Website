document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar-background");

    window.addEventListener("scroll", function() {
        navbar.style.backgroundColor = window.scrollY > 100 ? "rgba(0, 0, 0, 0.8)" : "black";
    });

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });

    const navbarLinks = document.querySelectorAll('.navbar-right a');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = link.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                const sectionId = href.substring(1);
                const section = document.getElementById(sectionId);
                if (section) {
                    section.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
            
            else {
                link.classList.add("active");
            }
        });
    });
});
