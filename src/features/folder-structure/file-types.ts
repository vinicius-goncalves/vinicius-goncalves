enum StructureType {
    FILE = 'File',
    FOLDER = 'Folder'
}

interface Content {
    type: StructureType,
    name: string;
    src: string;
    subFolder?: Array<Content>;
}

interface File {
    type: StructureType.FILE,
    name: string;
}

interface Folder {
    type: StructureType.FOLDER,
    name: string;
}

export { StructureType, Content, File, Folder };