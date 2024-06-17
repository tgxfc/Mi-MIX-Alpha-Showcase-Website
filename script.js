document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar-background");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 100) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            navbar.style.backgroundColor = "black";
        }
    });

    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener to each link
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent default behavior

        const sectionId = this.getAttribute('href').substring(1); // Get section ID without #

        // Scroll to the corresponding section
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth' // Use smooth scrolling
        });
    });
});
