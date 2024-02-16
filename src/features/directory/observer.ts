import { toggleFolderIcon } from './utils.js';

const foldersDirectory = document.querySelector('[data-directory="folders-container"]') as HTMLElement;

const observer = new MutationObserver((mutations: MutationRecord[]) => {

    mutations.forEach(mutation => {

        const folderSubContent = mutation.target as HTMLElement;
        const folderContainer = folderSubContent.closest('[data-folder="container"]') as HTMLElement;

        const isSubContentHidden: boolean = folderSubContent.style.getPropertyValue('display') === 'none';

        toggleFolderIcon(folderContainer, isSubContentHidden ? 'folder' : 'folder_open');
    });
});

observer.observe(foldersDirectory, { subtree: true, attributes: true, attributeFilter: ['[data-is-folder-open]', 'style'] });

export default {};