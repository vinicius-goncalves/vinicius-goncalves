import { toggleFolderIcon } from './utils.js';
const foldersDirectory = document.querySelector('[data-directory="folders-container"]');
const observer = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        const folderSubContent = mutation.target;
        const folderContainer = folderSubContent.closest('[data-folder="container"]');
        const isSubContentHidden = folderSubContent.style.getPropertyValue('display') === 'none';
        toggleFolderIcon(folderContainer, isSubContentHidden ? 'folder' : 'folder_open');
    });
});
observer.observe(foldersDirectory, { subtree: true, attributes: true, attributeFilter: ['[data-is-folder-open]', 'style'] });
export default {};
