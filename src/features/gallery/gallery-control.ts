import * as ImagesControl from './images-list.js';

let currIndex: number = 0;
const MAX_IMAGES: number = ImagesControl.MAX_IMAGES_LENGTH;

function getImageWidth(): number {
    const refImage = document.querySelector('[data-gallery="image"]') as HTMLImageElement;
    return refImage.offsetWidth;
}

function updateIndex(btnClicked: ('next' | 'prev')): number {

    if(btnClicked === 'next') {
        currIndex = (currIndex + 1) % MAX_IMAGES;
    }

    if(btnClicked === 'prev') {
        currIndex = ((currIndex - 1) + MAX_IMAGES) % MAX_IMAGES;
    }

    return currIndex;
}

function updateTransformTransition(target: HTMLElement): void {

    const negativeImageWidth = -1 * getImageWidth();
    const currPixels = negativeImageWidth * currIndex;
    const pixelsToStr = String(currPixels).concat('px');

    const targetStyle = target.style;
    targetStyle.setProperty('transform', `translateX(${pixelsToStr})`);
}

const slideControl = { updateTransformTransition, updateIndex };

export default slideControl;