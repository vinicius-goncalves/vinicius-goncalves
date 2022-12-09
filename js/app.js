import { auxToTimeout } from './utils.js'

const main = document.querySelector('main')
const navbar = document.querySelector('nav')
const docEl = document.documentElement

const principalSection = document.querySelector('.principal-section')

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
        cssSelector: '.expand_more--icon',
        classToDoAction: 'active-expand_more--icon',
        afterMs: 600,
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
        afterMs: 1000,
        action: 'add'
    }
]

function refreshLayout() {

    const principalSectionRect = principalSection.getBoundingClientRect()
    const scrollTop = Math.floor(docEl.scrollTop)

    if(scrollTop === 0) {
        navbar.classList.remove('active-navbar-color')
    }

    if(principalSectionRect.bottom <= 150) {
        main.classList.add('class', 'active-main')
    }

    if(principalSectionRect.bottom <= 200) {
        navbar.classList.add('active-navbar-color')
    }
}

function firstInitialization() {

    refreshLayout()
    elementsToLoad.forEach(el => auxToTimeout(el))
}

window.addEventListener('DOMContentLoaded', firstInitialization)
window.addEventListener('scroll', refreshLayout)
