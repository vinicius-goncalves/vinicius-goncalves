import { CacheManager } from './storage/cache-manager.js'

const countryLanguages = document.querySelector('.country-languages')

const languagesCache = new CacheManager('languages')
const dataPath = `${window.origin}/data/languages.json`

async function updateLanguagesCache() {
    const itemsResult = await languagesCache.findItem(dataPath)
    
    if(!itemsResult.exists || itemsResult.exists == undefined) {
        await languagesCache.putItem(dataPath, 'application/json')
        return
    }
}

window.addEventListener('DOMContentLoaded', updateLanguagesCache)

countryLanguages.addEventListener('click', async (event) => {
    
    const targetClicked = event.target

    if(!(targetClicked instanceof HTMLImageElement)) {
        return
    }

    const languageClicked = targetClicked.dataset.language
        
    switch(languageClicked) {
        case 'PT-BR':
            localStorage.setItem('current-language', 'PT-BR')
            break
        case 'EN-US':
            localStorage.setItem('current-language', 'EN-US')
            break
        default:
    }

    const { ['result']: languages } = await languagesCache.findItem(dataPath, 'application/json')

    const phrasesAndWordsPairs = Object.entries(languages[languageClicked])
    phrasesAndWordsPairs.forEach(pair => {
        const [ cssSelector, languagePhrase ] = pair

        document.querySelector(`[data-language-text="${cssSelector}"`).textContent = languagePhrase

    })
})