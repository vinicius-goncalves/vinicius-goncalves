import('./observer.js');
import updateTitle from '../../utils/update-title.js';
const sidebarBtns = document.querySelectorAll('[data-sidebar-btn="wrapper"]');
const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]');
const allSections = document.querySelectorAll('[id]');
const sidebarAnchors = [...document.querySelectorAll('[data-sidebar-anchor]')];
const GAP_SECTION_HEIGHT = 400;
function isVisible(element) {
    const scrollTop = window.scrollY + GAP_SECTION_HEIGHT;
    return element.offsetTop < scrollTop;
}
const sidebarControl = {
    visibilityMap: {
        hidden: 'none',
        visible: 'block'
    },
    getSidebarVisibility() {
        const sidebarAttrs = sidebarWrapper.dataset.sidebarVisibility;
        return sidebarAttrs;
    },
    isVisibilityHidden() {
        const visibility = this.getSidebarVisibility();
        const hiddenVisibilities = ['', 'none', 'hidden'];
        const isHidden = hiddenVisibilities.includes(visibility);
        return isHidden;
    },
    setNewVisibility(visibility) {
        sidebarWrapper.dataset.sidebarVisibility = visibility;
        sidebarWrapper.style.setProperty('display', this.visibilityMap[visibility]);
    },
    toggleVisibility() {
        const isSidebarHidden = this.isVisibilityHidden();
        this.setNewVisibility(isSidebarHidden ? 'visible' : 'hidden');
    },
    updateActiveSection() {
        const visibleSection = [...allSections].reverse().find(section => isVisible(section));
        if (!visibleSection) {
            return;
        }
        const sidebarAnchor = sidebarAnchors.find((anchor) => visibleSection.id == anchor.dataset.sidebarAnchor);
        sidebarAnchors.forEach(anchor => anchor.classList.remove('active-section'));
        if (typeof sidebarAnchor === 'undefined') {
            return;
        }
        sidebarAnchor.classList.add('active-section');
        updateTitle(visibleSection.id);
    },
    close() {
        sidebarControl.setNewVisibility('hidden');
    }
};
sidebarBtns.forEach((btn) => {
    btn.addEventListener('click', () => sidebarControl.toggleVisibility());
});
sidebarWrapper.addEventListener('click', (event) => {
    const target = event.target;
    const isEmptySpace = target.hasAttribute('data-sidebar');
    if (isEmptySpace) {
        return;
    }
    sidebarControl.close();
});
export default sidebarControl;
