const openMenuButton = document.querySelector('#menu-open')
const closeMenuButton = document.querySelector('#menu-close')
const menu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')

function openMenu() {
  menu.classList.add('open')
  // Stop scrolling page while menu is open
  body.style.overflow = 'hidden'
}

function closeMenu() {
  menu.classList.remove('open')
  body.style.overflow = 'auto'
}

openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
