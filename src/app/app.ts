import applyYOpacityAnimation from '../animations/_y-opacity-effect.js';
import sidebarControl from '../features/sidebar/sidebar-control.js';

const mainHeader = document.querySelector('[data-html-element="main-header"]') as HTMLElement;
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
}

window.addEventListener('DOMContentLoaded', (): void => {
    sidebarControl.updateActiveSection();
    loadAnimations();
});

window.addEventListener('scroll', () => {
    sidebarControl.updateActiveSection();
});