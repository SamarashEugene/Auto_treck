"use strict"

let headerToggleItem1 = document.querySelector('.header__burger-item-1')
let headerToggleItem2 = document.querySelector('.header__burger-item-2')
let headerToggleItem22 = document.querySelector('.header__burger-item-2-2')
let headerToggleItem3 = document.querySelector('.header__burger-item-3')
let menuToggle = document.querySelector('.header__catalog')
let sectionCatalog = document.querySelector('.section__catalog')
let sectionCatalogTablet = document.querySelector('.section__catalog-tablet')
let sectionCatalogMobile = document.querySelector('.section__mobile-section')
let accordion = document.getElementsByClassName('accordion')

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        let panel = this.nextElementSibling
        if (panel.style.display === 'block') {
            panel.style.display = 'none'
        } else {
            panel.style.display = 'block'
        }
    })
}

menuToggle.addEventListener('click', function () {
    if (headerToggleItem1.style.display === 'none') {
        headerToggleItem2.style.transform = 'rotate(0)'
        headerToggleItem22.style.transform = 'rotate(0)'
        headerToggleItem1.style.display = 'block'
        headerToggleItem3.style.display = 'block'
        sectionCatalog.style.display = 'none'
        sectionCatalogTablet.style.display = 'none'
        sectionCatalogMobile.style.display = 'none'
    } else {
        headerToggleItem2.style.transform = 'rotate(45deg)'
        headerToggleItem22.style.transform = 'rotate(-45deg)'
        headerToggleItem1.style.display = 'none'
        headerToggleItem3.style.display = 'none'

        if (document.documentElement.clientWidth <= '962' && document.documentElement.clientWidth >= '600') {
            sectionCatalogTablet.style.display = 'flex'
            sectionCatalogMobile.style.display = 'none'
            sectionCatalog.style.display = 'none'
        }
        if (document.documentElement.clientWidth <= '559') {
            sectionCatalogTablet.style.display = 'none'
            sectionCatalogMobile.style.display = 'block'
            sectionCatalog.style.display = 'none'
        }
        if (document.documentElement.clientWidth >= '963') {
            sectionCatalog.style.display = 'block'
        }

    }
})