const firstWord = document.querySelector('.first-word')
const firstLore = document.querySelector('.first-lore')
const expandMoreIcon = document.querySelector('.expand_more--icon')
const spelling = document.querySelector('.spelling')

const navbar = document.querySelector('nav')
const main = document.querySelector('main')

window.onload = () => {
    setTimeout(() => {
        firstWord.classList.add('active-first-word')
    }, 500)
    
    setTimeout(() => {
        firstLore.classList.add('active-first-lore')
    }, 600)

    setTimeout(() => {
        expandMoreIcon.classList.add('active-expand_more--icon')
        document.querySelector('.alert').classList.add('active-alert')

    }, 1000)

    setTimeout(() => {
        spelling.classList.add('active-spelling-effect')
    }, 900)

    setTimeout(() => {
        navbar.classList.add('active-navbar')
    }, 1000)
}

const x = Array.from(navbar.children)
const documentEl = document.documentElement


window.addEventListener('scroll', () => {
    const clientHeightDynamic = documentEl.clientHeight - documentEl.scrollTop
    if(documentEl.scrollTop === 0) {
        navbar.classList.remove('active-navbar-color')
    }
    
    if(clientHeightDynamic <= 880) {
        navbar.classList.add('active-navbar-color')
    }
    
    if(clientHeightDynamic <= 680) {
        main.classList.add('active-main')
        const skillsChildren = document.querySelector('.skills')
        setTimeout(() => {
            skillsChildren.querySelectorAll('.spelling').forEach(child => child.classList.add('active-spelling-effect'))
        }, 1000 / 2)
    }

    if(clientHeightDynamic <= 890) {
        document.querySelector('.alert').classList.add('alert-remove')
    }else {
        document.querySelector('.alert').classList.remove('alert-remove')
    }
})

// const randomCharacters = (length) => {
//     let result = ""
//     const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
//     const charactersLength = characters.length
//     for(let i = 0; i < length; i++) {
//         result += characters.charAt(Math.random() * charactersLength)
//     }
//     return result
// }

// console.log(randomCharacters(6))