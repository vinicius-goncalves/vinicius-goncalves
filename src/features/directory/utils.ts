function toggleFolderIcon(folderContainer: HTMLElement, icon: 'folder_open' | 'folder'): void {

    const folderDetails = folderContainer.querySelector('[data-folder-container="folder-details"]') as HTMLElement;
    const folderIcon = folderDetails.querySelector('span[data-folder-details="icon"]') as HTMLSpanElement;

    folderIcon.textContent = icon;
}

function toggleFolderVisibility(event: Event): void {

    event.stopPropagation();

    const targetClicked: HTMLElement | null = event.target as HTMLElement;

    if(!targetClicked) {
        return;
    }

    const folderSelector: string = '[data-folder="container"]';

    const folderContainer: HTMLElement | null = targetClicked.matches(folderSelector)
        ? targetClicked
        : targetClicked.closest(folderSelector);

    if(!folderContainer) {
        return;
    }

    const folderSubContent = folderContainer.querySelector('[data-folder="container-subcontent"]') as HTMLElement;

    if(!folderSubContent) {
        return;
    }

    const isSubContentHidden = folderSubContent.style.getPropertyValue('display') === 'none'
        || typeof folderSubContent.style.getPropertyValue('display') === 'undefined';

    folderSubContent.style.setProperty('display', isSubContentHidden ? 'block' : 'none');
}

function getExtensionName(extensionName: string) {

    const extensions: { [key: string]: unknown } = {
        js: 'javascript',
        ts: 'typescript',
        vue: 'vuejs'
    }

    return extensions[extensionName];
}

export { toggleFolderVisibility, toggleFolderIcon, getExtensionName };