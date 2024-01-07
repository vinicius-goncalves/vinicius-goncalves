import applyYOpacityAnimation from '../animations/_y-opacity-effect.js';
import applyXNavbarTransition from '../animations/_x-navbar-transition.js';
const mainHeader = document.querySelector('[data-html-element="main-header"]');
const mainNavbar = mainHeader.querySelector('[data-main-header="main-nav"]');
const initialLore = mainHeader.querySelector('[data-lore="initial"]');
const aboutMe = document.querySelector('[data-html-element="about-me"]');
function applyAnimation(element, index) {
    const delayDifference = (index * 100) + 100;
    applyYOpacityAnimation(element, 500 + delayDifference);
}
function loadAnimations() {
    const initialLoreChildren = initialLore.children;
    const elements = [...initialLoreChildren];
    elements.forEach((element, index) => {
        applyAnimation(element, index);
    });
    applyXNavbarTransition(mainNavbar, 600);
}
window.addEventListener('DOMContentLoaded', () => {
    loadAnimations();
});
window.addEventListener('scroll', () => {
    mainNavbar.classList.toggle('navbar-background-color', window.scrollY >= 15);
    if (window.scrollY >= 500) {
        applyYOpacityAnimation(aboutMe);
    }
});
