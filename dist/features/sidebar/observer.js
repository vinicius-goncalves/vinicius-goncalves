import sidebarControl from './sidebar-control.js';
const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]');
const MAX_MUTATION_LIMIT = 1;
const sidebarObserver = new MutationObserver((mutations) => {
    if (mutations.length > MAX_MUTATION_LIMIT) {
        return;
    }
    const mutation = mutations[0];
    const mutationType = mutation.type;
    if (mutationType !== 'attributes') {
        return;
    }
    const visibility = sidebarControl.getSidebarVisibility();
    sidebarWrapper.classList.toggle('active', visibility === 'visible');
});
sidebarObserver.observe(sidebarWrapper, { attributes: true });
export default {};
