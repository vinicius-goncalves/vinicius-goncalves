type GalleryImage = { title: string, src: string };

const imagesSrc: Array<GalleryImage> = [
    { title: 'Estrutura de pastas', src: 'assets/images/gallery/image-1.jpg' },
    { title: 'Sistema de carrinho', src: 'assets/images/gallery/image-2.jpg' },
    { title: 'Paginação', src: 'assets/images/gallery/image-3.jpg' },
    { title: 'Modals vanilla', src: 'assets/images/gallery/image-4.jpg' }
];

const MAX_IMAGES_LENGTH: number = imagesSrc.length;

export { imagesSrc, MAX_IMAGES_LENGTH };