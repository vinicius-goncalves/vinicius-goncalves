import * as ImagesControl from './images-list.js';
let currIndex = 0;
const MAX_IMAGES = ImagesControl.MAX_IMAGES_LENGTH;
function getImageWidth() {
    const refImage = document.querySelector('[data-gallery="image"]');
    return refImage.offsetWidth;
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
