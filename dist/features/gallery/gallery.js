import galleryControl from './gallery-control.js';
import('./images-loader.js');
const galleryImages = document.querySelector('[data-gallery="images"]');
const galleryBtns = document.querySelectorAll('[data-gallery-btn]');
function handleClick(btn) {
    galleryControl.updateIndex(btn.dataset.galleryBtn);
    galleryControl.updateTransformTransition(galleryImages);
}
function handleResize() {
    galleryControl.updateTransformTransition(galleryImages);
}
galleryBtns.forEach(btn => btn.addEventListener('click', () => handleClick(btn)));
window.addEventListener('resize', handleResize);
