import('./observer.js');
import { getExtensionName, toggleFolderVisibility } from './utils.js';
import buildElement from '../../utils/element-builder.js';
import { StructureType } from './file-types.js';
async function getProjectsAsDirectory() {
    const req = await fetch('./assets/json/projects-as-directory.json');
    const json = (await req.json());
    return json;
}
const directory = await getProjectsAsDirectory();
const foldersDirectory = document.querySelector('[data-directory="folders-container"]');
function createFile(name, src) {
    const fileWrapper = buildElement('div')
        .setCustomAttribute('data-file', 'container')
        .build();
    const fileDetails = buildElement('div')
        .setCustomAttribute('data-file-container', 'file-details')
        .appendOn(fileWrapper)
        .build();
    buildElement('img')
        .setBuiltInAttribute('src', `./assets/images/logos/extensions/${getExtensionName(name.split('.')[1])}-logo-256x256.png`)
        .setBuiltInAttribute('width', '16')
        .appendOn(fileDetails)
        .build();
    buildElement('a')
        .setText(name)
        .setBuiltInAttribute('target', '_blank')
        .setBuiltInAttribute('href', src)
        .setCustomAttribute('data-file-details', 'name')
        .appendOn(fileDetails)
        .build();
    buildElement('span')
        .setCustomAttribute('data-folder-details', 'open_in_new-icon')
        .addClass('material-symbols-sharp')
        .setText('open_in_new')
        .appendOn(fileDetails)
        .build();
    return fileWrapper;
}
function createFolder(name, hasSubContents = false) {
    const folderWrapper = buildElement('div')
        .setCustomAttribute('data-folder', 'container')
        .build();
    const folderDetails = buildElement('div')
        .setCustomAttribute('data-folder-container', 'folder-details')
        .appendOn(folderWrapper)
        .build();
    buildElement('span')
        .setCustomAttribute('data-folder-details', 'icon')
        .addClass('material-symbols-sharp')
        .setText('folder')
        .appendOn(folderDetails)
        .build();
    buildElement('span')
        .setCustomAttribute('data-folder-details', 'name')
        .setText(name)
        .appendOn(folderDetails)
        .build();
    if (!hasSubContents) {
        return { folder: folderWrapper };
    }
    const folderSubContent = buildElement('div')
        .setCustomAttribute('data-folder', 'container-subcontent')
        .setStyle({ display: 'none' })
        .appendOn(folderWrapper)
        .build();
    return { folder: folderWrapper, subFolder: folderSubContent };
}
function loadContent(content, root) {
    if (content.type === StructureType.FOLDER) {
        const { folder, subFolder } = createFolder(content.name, !!content.subFolder);
        const subFiles = Array.isArray(content.subFolder)
            ? content.subFolder
            : [content.subFolder];
        for (const subContent of subFiles) {
            if (!subContent || !subFolder) {
                continue;
            }
            if (subContent.type === StructureType.FILE) {
                const file = createFile(subContent.name, subContent.src);
                subFolder.appendChild(file);
            }
            loadContent(subContent, subFolder);
        }
        root.appendChild(folder);
    }
}
function removeLoader() {
    const wrapperLoader = document.querySelector('[data-loader="wrapper"]');
    if (!wrapperLoader) {
        return;
    }
    wrapperLoader.remove();
}
function handleContentRender() {
    directory.forEach((content) => loadContent(content, foldersDirectory));
    removeLoader();
}
handleContentRender();
foldersDirectory.addEventListener('click', toggleFolderVisibility);
