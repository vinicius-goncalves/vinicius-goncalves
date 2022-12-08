const main = document.querySelector('main')
const navbar = document.querySelector('nav')
const docEl = document.documentElement

function firstInitialization() {

    const firstWord = document.querySelector('.first-word')
    const firstLore = document.querySelector('.first-lore')
    const expandMoreIcon = document.querySelector('.expand_more--icon')
    const links = document.querySelector('.a_links')
    
    setTimeout(() => {
        firstWord.classList.add('active-x-opacity-effect')
    }, 500)
    
    setTimeout(() => {
        firstLore.classList.add('active-x-opacity-effect')
    }, 600)

    setTimeout(() => {
        expandMoreIcon.classList.add('active-expand_more--icon')
        document.querySelector('.alert').classList.add('active-alert')
    }, 1000)

    setTimeout(() => {
        links.classList.add('active-a_links-effect')
    }, 900)

    setTimeout(() => {
        navbar.classList.add('active-navbar')
    }, 1000)

}

window.addEventListener('DOMContentLoaded', firstInitialization)

const principalSection = document.querySelector('.principal-section')

window.addEventListener('scroll', () => {

    const principalSectionRect = principalSection.getBoundingClientRect()

    if(principalSectionRect.bottom <= 0) {
        main.classList.add('class', 'active-main')
    }

    // if(docEl.scrollTop === 0) {
    //     navbar.classList.remove('active-navbar-color')
    // }
    
    // if(clientHeightDynamic <= 880) {
    //     navbar.classList.add('active-navbar-color')
    // }
    
    // if(clientHeightDynamic <= 680) {
    //     main.classList.add('active-main')
    //     const skillsChildren = document.querySelector('.skills')
    //     setTimeout(() => {
    //         skillsChildren.querySelectorAll('.a_links').forEach(child => child.classList.add('active-a_links-effect'))
    //     }, 1000 / 2)
    // }

    // if(clientHeightDynamic <= 890) {
    //     document.querySelector('.alert').classList.add('alert-remove')
    // }else {
    //     document.querySelector('.alert').classList.remove('alert-remove')
    // }
})