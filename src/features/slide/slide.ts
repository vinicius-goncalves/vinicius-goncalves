import slideControl from './slide-control.js';

const galleryImages = document.querySelector('[data-gallery="images"]') as HTMLDivElement;
const galleryBtns = document.querySelectorAll('[data-gallery-btn]') as NodeListOf<HTMLSpanElement>;

function handleClick(btn: HTMLElement): void {
    slideControl.updateIndex(btn.dataset.galleryBtn as ('next' | 'prev'));
    slideControl.updateTransformTransition(galleryImages);
}

function handleResize(): void {
    slideControl.updateTransformTransition(galleryImages);
}

galleryBtns.forEach(btn => btn.addEventListener('click', () => handleClick(btn)));
window.addEventListener('resize', handleResize);