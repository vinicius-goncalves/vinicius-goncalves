const head = document.head;

function createCSSLink(href: string): HTMLLinkElement {

    const link = document.createElement('link');

    link.href = href;
    link.rel = 'stylesheet';

    return link;
}

function loadCSSLinks(links: Array<HTMLLinkElement>): void {

    if(links.length <= 0) {
        return;
    }

    if(links.length === 1) {
        head.appendChild(links[0]);
        return;
    }

    head.prepend(...links);
}

const cssHref: Array<string> = [
    './style/features/sidebar.css',
    './style/features/slide.css',
    './style/sections/gallery.css',
    './style/sections/footer.css',
    './style/sections/introduction.css',
    './style/sections/stack.css',
    './style/main.css',
    './style/projects.css'
];

const cssLinks: Array<HTMLLinkElement> = cssHref.map(href => createCSSLink(href));
loadCSSLinks(cssLinks);

export default {};