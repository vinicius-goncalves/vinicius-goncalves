import applyYOpacityAnimation from '../animations/_y-opacity-effect.js';
import applyXNavbarTransition from '../animations/_x-navbar-transition.js';

const mainHeader = document.querySelector('[data-html-element="main-header"]') as HTMLElement;
const mainNavbar = mainHeader.querySelector('[data-main-header="main-nav"]') as HTMLElement;
const initialLore = mainHeader.querySelector('[data-main-header="introduction"]') as HTMLElement;
function applyAnimation(element: HTMLElement, index: number) {

    const delayDifference = (index * 100) + 100;

    applyYOpacityAnimation(element, 500 + delayDifference);
}

function loadAnimations() {

    const initialLoreChildren: HTMLCollection = initialLore.children;
    const elements: Array<HTMLElement> = [...initialLoreChildren] as Array<HTMLElement>;

    elements.forEach((element: HTMLElement, index: number) => {
        applyAnimation(element, index);
    });

    applyXNavbarTransition(mainNavbar, 600)
}

window.addEventListener('DOMContentLoaded', (): void => {
    loadAnimations();
});

window.addEventListener('scroll', () => {
    mainNavbar.classList.toggle('navbar-background-color', window.scrollY >= 15);
});