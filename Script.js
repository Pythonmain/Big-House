document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".fade-up").forEach(el => {
        el.style.opacity = "1";
    });


    if (typeof bulmaCarousel !== 'undefined') {
        bulmaCarousel.attach('#slider', {
            slidesToScroll: 1,
            slidesToShow: 1,
            infinite: true,
            autoplay: true,
        });
    }
});
