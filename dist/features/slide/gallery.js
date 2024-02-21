import slideControl from './slide-control.js';
const galleryImages = document.querySelector('[data-gallery="images"]');
const galleryBtns = document.querySelectorAll('[data-gallery-btn]');
function handleClick(btn) {
    slideControl.updateIndex(btn.dataset.galleryBtn);
    slideControl.updateTransformTransition(galleryImages);
}
function handleResize() {
    slideControl.updateTransformTransition(galleryImages);
}
galleryBtns.forEach(btn => btn.addEventListener('click', () => handleClick(btn)));
window.addEventListener('resize', handleResize);
