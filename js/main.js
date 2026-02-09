document.addEventListener("DOMContentLoaded", function() {

    /* ===============================
       Scroll Reveal Animation
    =============================== */

    const cards = document.querySelectorAll(
        ".service-card, .stat-card, .compliance-card, .project-card"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease";
        observer.observe(card);
    });


    /* ===============================
       Mobile Hamburger Toggle
    =============================== */

    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("nav-menu");

    if (hamburger && navMenu) {

        hamburger.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Close menu when a link is clicked (professional touch)
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }

});
