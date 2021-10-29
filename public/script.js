// druk op knop
const menuButton = document.querySelector('header button') 
const nav = document.querySelector('body > nav')

menuButton.addEventListener('click', toggleMenu)

function toggleMenu (){
    // slide-in nav, als ze er niet al staat, anders slide-out
    nav.classList.toggle('open')
}


