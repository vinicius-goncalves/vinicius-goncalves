import('./observer.js');

import updateTitle from '../../utils/update-title.js';

const sidebarBtns = document.querySelectorAll('[data-sidebar-btn="wrapper"]') as NodeListOf<Element>;
const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]') as HTMLDivElement;

const allSections = document.querySelectorAll('[id]') as NodeListOf<HTMLElement>;
const sidebarAnchors = [...document.querySelectorAll('[data-sidebar-anchor]') as NodeListOf<HTMLAnchorElement>];

const GAP_SECTION_HEIGHT = 400

function isVisible(element: HTMLElement): boolean {
    const scrollTop = window.scrollY + GAP_SECTION_HEIGHT;
    return element.offsetTop < scrollTop;
}

const sidebarControl = {

    visibilityMap: {
        hidden: 'none',
        visible: 'block'
    },

    getSidebarVisibility(): 'hidden' | 'visible' {

        const sidebarAttrs = sidebarWrapper.dataset.sidebarVisibility as ('hidden' | 'visible');
        return sidebarAttrs;

    },

    isVisibilityHidden(): boolean {

        const visibility: string = this.getSidebarVisibility();
        const hiddenVisibilities: Array<string> = ['', 'none', 'hidden'];

        const isHidden: boolean = hiddenVisibilities.includes(visibility);

        return isHidden;
    },

    setNewVisibility(visibility: 'hidden' | 'visible'): void {

        sidebarWrapper.dataset.sidebarVisibility = visibility;
        sidebarWrapper.style.setProperty('display', this.visibilityMap[visibility]);

    },

    toggleVisibility(): void {

        const isSidebarHidden: boolean = this.isVisibilityHidden();
        this.setNewVisibility(isSidebarHidden ? 'visible' : 'hidden');
    },

    updateActiveSection(): void {

        const visibleSection = [...allSections].reverse().find(section => isVisible(section));

        if(!visibleSection) {
            return;
        }

        const sidebarAnchor = sidebarAnchors.find((anchor: HTMLAnchorElement) => visibleSection.id == anchor.dataset.sidebarAnchor);
        sidebarAnchors.forEach(anchor => anchor.classList.remove('active-section'));

        if(typeof sidebarAnchor === 'undefined') {
            return;
        }

        sidebarAnchor.classList.add('active-section');
        updateTitle(visibleSection.id)

    },

    close(): void {
        sidebarControl.setNewVisibility('hidden');
    }
}

sidebarBtns.forEach((btn): void => {
    btn.addEventListener('click', () => sidebarControl.toggleVisibility());
});

sidebarWrapper.addEventListener('click', (event) => {

    const target = event.target as HTMLElement;
    const isEmptySpace: boolean = target.hasAttribute('data-sidebar');

    if(isEmptySpace) {
        return;
    }

    sidebarControl.close();
});

export default sidebarControl;