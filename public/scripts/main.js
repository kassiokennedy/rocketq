import Modal from './modal.js'

const modal = Modal()

//buttons of check classe
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', event => {
    //Abrir modal
    modal.open()
  })
})
//P
