import galleryControl from './gallery-control.js';
import('./images-loader.js')

const galleryImages = document.querySelector('[data-gallery="images"]') as HTMLDivElement;
const galleryBtns = document.querySelectorAll('[data-gallery-btn]') as NodeListOf<HTMLSpanElement>;

function handleClick(btn: HTMLElement): void {
    galleryControl.updateIndex(btn.dataset.galleryBtn as ('next' | 'prev'));
    galleryControl.updateTransformTransition(galleryImages);
}

function handleResize(): void {
    galleryControl.updateTransformTransition(galleryImages);
}

galleryBtns.forEach(btn => btn.addEventListener('click', () => handleClick(btn)));
window.addEventListener('resize', handleResize);