function setFolderIcon(folderContainer, icon) {
    const folderDetails = folderContainer.querySelector('[data-folder-container="folder-details"]');
    const folderIcon = folderDetails.querySelector('span[data-folder-details="icon"]');
    folderIcon.textContent = icon;
}
function toggleFolderVisibility(event) {
    event.stopPropagation();
    const targetClicked = event.target;
    if (!targetClicked) {
        return;
    }
    const folderSelector = '[data-folder="container"]';
    const folderContainer = targetClicked.matches(folderSelector)
        ? targetClicked
        : targetClicked.closest(folderSelector);
    if (!folderContainer) {
        return;
    }
    const folderSubContent = folderContainer.querySelector('[data-folder="container-subcontent"]');
    if (!folderSubContent) {
        return;
    }
    const isSubContentHidden = folderSubContent.style.getPropertyValue('display') === 'none'
        || typeof folderSubContent.style.getPropertyValue('display') === 'undefined';
    folderSubContent.style.setProperty('display', isSubContentHidden ? 'block' : 'none');
    setFolderIcon(folderContainer, isSubContentHidden ? 'folder_open' : 'folder');
    // const subFolder = folderContainer?.querySelector('[data-a="a"]') as HTMLElement;
    // const a = folderContainer?.querySelector('.content-details')
    // const b = a?.querySelector('span') as HTMLElement;
    // if(subFolder.style.getPropertyValue('display') === undefined || subFolder.style.getPropertyValue('display') === 'none') {
    //     subFolder.style.removeProperty('display');
    //     b.textContent = 'folder_open';
    // } else {
    //     b.textContent = 'folder';
    //     subFolder.style.setProperty('display', 'none');
    // }
}
export { toggleFolderVisibility };
