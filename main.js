
const toggle = document.querySelector('#menue')
const nav = document.querySelector('.navbar')


toggle.addEventListener('click', () => {
     nav.classList.toggle('active')
})