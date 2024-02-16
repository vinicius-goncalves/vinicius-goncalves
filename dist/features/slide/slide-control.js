const galleryImages = document.querySelectorAll('[data-gallery="image"]');
const refImage = galleryImages[0];
let currIndex = 0;
const MAX_IMAGES = galleryImages.length;
function getImageWidth() {
    return refImage.offsetWidth ?? 0;
}
function updateIndex(btnClicked) {
    if (btnClicked === 'next') {
        currIndex = (currIndex + 1) % MAX_IMAGES;
    }
    if (btnClicked === 'prev') {
        currIndex = ((currIndex - 1) + MAX_IMAGES) % MAX_IMAGES;
    }
    return currIndex;
}
function updateTransformTransition(target) {
    const negativeImageWidth = -1 * getImageWidth();
    const currPixels = negativeImageWidth * currIndex;
    const pixelsToStr = String(currPixels).concat('px');
    const targetStyle = target.style;
    targetStyle.setProperty('transform', `translateX(${pixelsToStr})`);
}
const slideControl = { updateTransformTransition, updateIndex };
export default slideControl;
