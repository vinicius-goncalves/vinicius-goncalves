function toggleFolderIcon(folderContainer, icon) {
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
}
export { toggleFolderVisibility, toggleFolderIcon };
