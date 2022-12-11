import { auxToTimeout } from './utils.js'

const seeMoreIcon = document.querySelector('.see_more--icon')
const main = document.querySelector('main')
const navbar = document.querySelector('nav')
const docEl = document.documentElement

const principalSection = document.querySelector('.principal-section')
const header = document.querySelector('header').getBoundingClientRect()

const elementsToLoad = [
    {
        cssSelector: '.first-word',
        classToDoAction: 'active-x-opacity-effect',
        afterMs: 500,
        action: 'add'
    },
    {
        cssSelector: '.first-lore',
        classToDoAction: 'active-x-opacity-effect',
        afterMs: 600,
        action: 'add'
    },
    {
        cssSelector: '.see_more--icon',
        classToDoAction: 'active-see_more--icon',
        afterMs: 650,
        action: 'add'
    },
    {
        cssSelector: '.a_links',
        classToDoAction: 'active-a_links-effect',
        afterMs: 900,
        action: 'add'
    },
    {
        cssSelector: 'nav',
        classToDoAction: 'active-navbar',
        afterMs: 0,
        action: 'add'
    }
]

function refreshLayout() {

    const scrollTop = Math.floor(docEl.scrollTop)
    const principalSectionRect = principalSection.getBoundingClientRect()

    if(scrollTop === 0) {
        navbar.classList.remove('active-navbar-backgroundcolor')
    }

    if(principalSectionRect.bottom <= 150) {
        main.classList.add('class', 'active-main')
    }

    if(principalSectionRect.bottom <= 250 || principalSectionRect.height >= 200) {
        navbar.classList.add('active-navbar-backgroundcolor')
    }
    
    console.log(principalSectionRect.bottom)

}

function firstInitialization() {

    refreshLayout()
    elementsToLoad.forEach(el => auxToTimeout(el))

    seeMoreIcon.addEventListener('click', () => {
        docEl.scrollTo({
            behavior: 'auto',
            top: main.offsetTop
        })
    })
}

window.addEventListener('DOMContentLoaded', firstInitialization)
window.addEventListener('scroll', refreshLayout)
