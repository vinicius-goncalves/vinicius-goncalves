import buildElement from '../../utils/element-builder.js';
import { imagesSrc } from './images-list.js';
const galleryImages = document.querySelector('[data-gallery="images"]');
function createImageTitle(title) {
    const imageTitle = buildElement('figcaption')
        .setCustomAttribute('data-gallery', 'image-title')
        .setText(title)
        .build();
    return imageTitle;
}
function createImageWrapper() {
    const imageWrapper = buildElement('figure')
        .setCustomAttribute('data-gallery', 'image-wrapper')
        .build();
    return imageWrapper;
}
function createImage(src) {
    const image = buildElement('img')
        .setBuiltInAttribute('src', src)
        .setCustomAttribute('data-gallery', 'image')
        .build();
    return image;
}
function createSlideImage(title, src) {
    const imageWrapper = createImageWrapper();
    const img = createImage(src);
    const imageTitle = createImageTitle(title);
    imageWrapper.append(img, imageTitle);
    return imageWrapper;
}
imagesSrc.forEach(({ title, src }) => {
    const imageSlide = createSlideImage(title, src);
    galleryImages.appendChild(imageSlide);
});
export default {};
