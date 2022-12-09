const countryLanguages = document.querySelector('.country-languages')

countryLanguages.addEventListener('click', (event) => {
    
    const targetClicked = event.target

    if(targetClicked instanceof HTMLImageElement) {
        
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
    }
})