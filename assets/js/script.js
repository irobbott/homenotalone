document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.getElementById("mobile-nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav-list");
    const overlay = document.querySelector(".mobile-white-overlay");

    navToggle.addEventListener("click", function () {
        mobileNav.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Close when clicking on overlay
    overlay.addEventListener("click", function () {
        mobileNav.classList.remove("active");
        overlay.classList.remove("active");
    });
});