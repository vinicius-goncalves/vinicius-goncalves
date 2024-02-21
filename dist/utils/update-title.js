function updateTitle(newTitle) {
    const capitalizedText = newTitle[0].toUpperCase() + newTitle.slice(1);
    document.title = capitalizedText + ' | vinicius-goncalves.com';
}
export default updateTitle;
