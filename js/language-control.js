const countryLanguages = document.querySelector('.country-languages')

countryLanguages.addEventListener('click', (event) => {
    
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

    fetch(`${window.origin}/data/languages.json`).then(response => {
        return response.json()
    }).then(languages => {
        
        const phrasesAndWordsPairs = Object.entries(languages[languageClicked])
        phrasesAndWordsPairs.forEach(pair => {
            const [ cssSelector, languagePhrase ] = pair

            document.querySelector(`[data-language-text="${cssSelector}"`).textContent = languagePhrase

        })
    })
})