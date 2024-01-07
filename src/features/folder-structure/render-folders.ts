import buildElement from '../../utils/element-builder.js';
import { StructureType, Content } from './file-types.js';

async function getProjectsAsDirectory() {
    const req = await fetch('./assets/json/projects.json');
    const json = (await req.json()) as Content[];
    return json;
}

const directory = await getProjectsAsDirectory();
// const directory: Array<Content> = [
//     {
//         type: StructureType.FOLDER,
//         name: 'javascript',
//         subFolder: [
//             {
//                 type: StructureType.FILE,
//                 name: 'first-file.js'
//             },
//             {
//                 type: StructureType.FILE,
//                 name: 'second-file.js'
//             },
//             {
//                 type: StructureType.FOLDER,
//                 name: 'folder',
//                 subFolder: [
//                     {
//                         type: StructureType.FILE,
//                         name: 'internal-file.ts'
//                     }
//                 ]
//             }
//         ]
//     },
//     {
//         type: StructureType.FOLDER,
//         name: 'empty-folder'
//     }
// ];

// <div data-content-type="file">
//                         <div class="content-details">
//                             <span class="material-symbols-outlined">description</span>
//                             <p>empty-file</p>
//                         </div>
//                     </div>

const main = document.querySelector('[data-directory="container"]') as HTMLElement;

function createFile(name: string, src: string) {

    const div = document.createElement('div')
    div.setAttribute('data-content-type', 'file');

    const contentDetails = document.createElement('div')
    contentDetails.classList.add('content-details');

    const extensionNames = (extensionName: string) => ({
        js: 'javascript'
    })[extensionName];

    const img = document.createElement('img');
    img.src = `./assets/images/logos/languages/${extensionNames(name.split('.')[1])}-logo-256x256.png`;
    img.width = 16;

    const a = document.createElement('a');
    a.textContent = name;
    a.target = '_blank'
    a.href = src

    contentDetails.append(img, a);
    div.appendChild(contentDetails);

    return div;
}

function hide(event: Event) {

    event.stopPropagation();

    const targetClicked: HTMLElement | null = event.target as HTMLElement;

    if(!targetClicked) {
        return;
    }

    const folderContainer = targetClicked.closest('[data-folder="container"]');
    const subFolder = folderContainer?.querySelector('[data-a="a"]') as HTMLElement;

    if(subFolder.style.getPropertyValue('display') === undefined || subFolder.style.getPropertyValue('display') === 'none') {
        subFolder.style.removeProperty('display')
    } else {
        subFolder.style.setProperty('display', 'none');
    }
}

function createFolder(name: string, hasSubContents: boolean = false) {

    const folder: HTMLElement = document.createElement('div');
    folder.setAttribute('data-folder', 'container');
    folder.addEventListener('click', hide);

    const contentDetails = document.createElement('div')
    contentDetails.classList.add('content-details');

    const span = document.createElement('span')
    span.classList.add('material-symbols-sharp')
    span.textContent = 'folder'

    const p = document.createElement('p');
    p.textContent = name;

    contentDetails.append(span, p);

    folder.appendChild(contentDetails);

    const subContents = document.createElement('div');
    subContents.setAttribute('data-folder', 'container-subcontent');
    subContents.setAttribute('data-a', 'a');
    folder.setAttribute('data-a', 'a');

    folder.appendChild(subContents);

    return { folder, subFolder: subContents };
}

function loadContent(content: Content, root: HTMLElement) {

    if(content.type === StructureType.FOLDER) {

        const { folder, subFolder } = createFolder(content.name);

        const subFiles = Array.isArray(content.subFolder)
            ? content.subFolder
            : [content.subFolder];

        for(const subContent of subFiles as Content[]) {

            if(!subContent) {
                continue;
            }

            if(subContent.type === StructureType.FILE) {
                const file = createFile(subContent.name, subContent.src);
                subFolder.appendChild(file);
            }

            loadContent(subContent, subFolder);
        }

        root.appendChild(folder);
    }
}

directory.forEach((content: Content) => {
    loadContent(content, main);
});
