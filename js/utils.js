export { auxToTimeout }

/**

 * Function to help handle with classes and fire setTimeout()
 * @param {object} obj - The object with details follow details:

    selector: '.first-word',
    classToDoAction: 'active-x-opacity-effect',
    afterMs: 500,
    action: 'add'

 */
function auxToTimeout(obj) {

    const {
        verification,
        cssSelector,
        classToDoAction,
        afterMs,
        action } = obj

    const el = document.querySelector(cssSelector)

    function classListManager() {
        return el.classList[action](classToDoAction)
    }

    if(typeof (verification) === 'null' || typeof verification === 'undefined') {
        setTimeout(() => {
            classListManager()
        }, afterMs)
    }

    if(verification) {
        setTimeout(() => {
            classListManager()
        }, afterMs)
    }
}