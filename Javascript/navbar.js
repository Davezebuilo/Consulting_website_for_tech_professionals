// DOM Selection
const menuShowBtn = document.getElementById("show"),
    menuCloseBtn = document.getElementById("hide"),
    mobileNav = document.querySelector(".mobile-navbar");

// Click Events
// Showing Mobile Nav
menuShowBtn.addEventListener("click", () => {
    mobileNav.style.right = "0";
});

const closeNav = () => {
    mobileNav.style.right = "-100%";
};
// Hiding Mobile Nav
menuCloseBtn.addEventListener("click", closeNav);
