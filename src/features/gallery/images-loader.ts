import buildElement from '../../utils/element-builder.js';
import { imagesSrc } from './images-list.js';

type GalleryImage = { title: string, src: string };

const galleryImages = document.querySelector('[data-gallery="images"]') as HTMLDivElement;

function createImageTitle(title: string): HTMLElement {

    const imageTitle = buildElement('figcaption')
        .setCustomAttribute('data-gallery', 'image-title')
        .setText(title)
        .build()

    return imageTitle;
}

function createImageWrapper(): HTMLElement {

    const imageWrapper: HTMLElement = buildElement('figure')
        .setCustomAttribute('data-gallery', 'image-wrapper')
        .build()

    return imageWrapper;
}

function createImage(src: string): HTMLImageElement {

    const image: HTMLImageElement = buildElement('img')
        .setBuiltInAttribute('src', src)
        .setCustomAttribute('data-gallery', 'image')
        .build();

    return image;
}

function createSlideImage(title: string, src: string): HTMLElement {

    const imageWrapper = createImageWrapper()
    const img = createImage(src);
    const imageTitle = createImageTitle(title);

    imageWrapper.append(img, imageTitle);

    return imageWrapper;
}

imagesSrc.forEach(({ title, src }: GalleryImage) => {
    const imageSlide = createSlideImage(title, src);
    galleryImages.appendChild(imageSlide)
});

export default {};