var slideIndex = 0;
var slides = document.querySelectorAll(".slide");

function showSlides(n) {
    slides.forEach((slide, index) => {
        slide.style.display = (index === n) ? "flex" : "none";
    });
}

function plusSlides(n) {
    slideIndex = (slideIndex + n + slides.length) % slides.length;
    showSlides(slideIndex);
}

showSlides(slideIndex);
