import('../utils/modules-loader.js');
import applyYOpacityAnimation from '../animations/_y-opacity-effect.js';
import sidebarControl from '../features/sidebar/sidebar-control.js';
const mainHeader = document.querySelector('[data-html-element="main-header"]');
const initialLore = mainHeader.querySelector('[data-main-header="introduction"]');
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
}
window.addEventListener('DOMContentLoaded', () => {
    sidebarControl.updateActiveSection();
    loadAnimations();
});
window.addEventListener('scroll', () => {
    sidebarControl.updateActiveSection();
});
