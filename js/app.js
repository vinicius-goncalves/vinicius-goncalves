const firstWord = document.querySelector('.first-word')
const firstLore = document.querySelector('.first-lore')
const expandMoreIcon = document.querySelector('.expand_more--icon')

window.onload = () => {
    setTimeout(() => {
        firstWord.classList.add('active-first-word')
    }, 500)
    
    setTimeout(() => {
        firstLore.classList.add('active-first-lore')
    }, 600)

    setTimeout(() => {
        expandMoreIcon.classList.add('active-expand_more--icon')
    }, 1000)
}

const randomCharacters = (length) => {
    let result = ""
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    const charactersLength = characters.length
    for(let i = 0; i < length; i++) {
        result += characters.charAt(Math.random() * charactersLength)
    }
    return result
}

console.log(randomCharacters(6))