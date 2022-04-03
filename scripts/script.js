"use strict"

let headerToggleItem1 = document.querySelector('.header__burger-item-1')
let headerToggleItem2 = document.querySelector('.header__burger-item-2')
let headerToggleItem22 = document.querySelector('.header__burger-item-2-2')
let headerToggleItem3 = document.querySelector('.header__burger-item-3')
let menuToggle = document.querySelector('.header__catalog')


menuToggle.addEventListener('click', function () {
    if(headerToggleItem1.style.display === 'none'){
        headerToggleItem2.style.transform = 'rotate(0)'
        headerToggleItem22.style.transform = 'rotate(0)'
        headerToggleItem1.style.display = 'block'
        headerToggleItem3.style.display = 'block'
    } else  {
        headerToggleItem2.style.transform = 'rotate(45deg)'
        headerToggleItem22.style.transform = 'rotate(-45deg)'
        headerToggleItem1.style.display = 'none'
        headerToggleItem3.style.display = 'none'
    }
})