const galleryImages = document.querySelectorAll('[data-gallery="image"]') as NodeListOf<HTMLImageElement>;
const refImage = galleryImages[0];

let currIndex: number = 0;
const MAX_IMAGES: number = galleryImages.length;

function getImageWidth(): number {
    return refImage.offsetWidth ?? 0;
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
    console.log(negativeImageWidth)
    const currPixels = negativeImageWidth * currIndex;
    const pixelsToStr = String(currPixels).concat('px');

    const targetStyle = target.style;
    targetStyle.setProperty('transform', `translateX(${pixelsToStr})`);
}

const slideControl = { updateTransformTransition, updateIndex };

export default slideControl;