/**
 * Related to the Mega Menu...
 */

const megaMenu = document.querySelector(".mega-menu");
const megaMenuIcon = document.querySelector(".mega-menu-icon");
const megaMenuTitle = document.querySelector(".mega-menu-title");
const megaMenuContent = document.querySelector(".mega-menu-content");
const megaMenuMobile = document.querySelector(".mega-menu-mobile");
const megaMenuMobileIcon = document.querySelector(".mega-menu-mobile-icon");
const megaMenuMobileContent = document.querySelector(
  ".mega-menu-mobile-content"
);

/**
 * Related to the Hamburger Menu...
 */
const hamburger = document.querySelector(".hamburger");
const hamburgerBar = document.querySelector(".hamburger-bar");
const hamburgerCross = document.querySelector(".hamburger-cross");
const hamburgerContent = document.querySelector(".hamburger-content");

/**
 * Required Functions for mouse events...
 */
function onMouseEnter() {
  megaMenuContent.classList.add("active");
  megaMenuIcon.classList.add("active");
  megaMenuTitle.classList.add("active");
}
function onMouseLeave() {
  megaMenuContent.classList.remove("active");
  megaMenuIcon.classList.remove("active");
  megaMenuTitle.classList.remove("active");
}

/**
 * Add event listeners for mega menu...
 */
megaMenu.addEventListener("mouseenter", onMouseEnter);
megaMenu.addEventListener("mouseleave", onMouseLeave);
megaMenuContent.addEventListener("mouseenter", onMouseEnter);
megaMenuContent.addEventListener("mouseleave", onMouseLeave);
megaMenuMobile.addEventListener("click", () => {
  megaMenuMobileContent.classList.toggle("active");
  megaMenuMobileIcon.classList.toggle("active");
});

/**
 * Add event listeners for hamburger menu...
 */
hamburger.addEventListener("click", () => {
  if (hamburgerContent.classList.contains("active")) {
    hamburgerBar.classList.remove("hidden");
    hamburgerCross.classList.add("hidden");
    hamburgerContent.classList.remove("active");
    return;
  }
  hamburgerBar.classList.add("hidden");
  hamburgerCross.classList.remove("hidden");
  hamburgerContent.classList.add("active");
});
