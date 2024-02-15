import sidebarControl from './sidebar-control.js';

const sidebarWrapper = document.querySelector('[data-sidebar="wrapper"]') as HTMLDivElement;
const MAX_MUTATION_LIMIT = 1;

const sidebarObserver = new MutationObserver((mutations: Array<MutationRecord>): void => {

    if(mutations.length > MAX_MUTATION_LIMIT) {
        return;
    }

    const mutation: MutationRecord = mutations[0];
    const mutationType: MutationRecordType = mutation.type;

    if(mutationType !== 'attributes') {
        return;
    }

    const visibility = sidebarControl.getSidebarVisibility();
    sidebarWrapper.classList.toggle('active', visibility === 'visible');
});

sidebarObserver.observe(sidebarWrapper, { attributes: true });

export default {};