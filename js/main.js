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

/* ===============================
   PREMIUM HERO SLIDER
=============================== */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    dots.forEach(dot => dot.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;
}

function nextSlide() {
    let newIndex = (currentSlide + 1) % slides.length;
    showSlide(newIndex);
}

function prevSlide() {
    let newIndex = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(newIndex);
}



function startSlider() {
    slideInterval = setInterval(nextSlide, 6000);
}

function resetSlider() {
    clearInterval(slideInterval);
    startSlider();
}

if (slides.length > 0) {


    startSlider();

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener("click", () => {
            nextSlide();
            resetSlider();
        });

        prevBtn.addEventListener("click", () => {
            prevSlide();
            resetSlider();
        });
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            showSlide(index);
            resetSlider();
        });
    });
}

const dotsContainer = document.querySelector(".slider-dots");

if (slides.length > 0 && dotsContainer) {

    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");

        dot.addEventListener("click", () => {
            showSlide(index);
            resetSlider();
        });

        dotsContainer.appendChild(dot);
    });
}

function updateDots(index) {
    document.querySelectorAll(".dot").forEach(dot => dot.classList.remove("active"));
    document.querySelectorAll(".dot")[index]?.classList.add("active");
}

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
    updateDots(index);
    currentSlide = index;
}