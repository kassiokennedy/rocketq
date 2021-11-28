import Modal from './modal.js'

const modal = Modal()

const modalTittle = document.querySelector('.modal h2')
const modalDiscription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//buttons of check classe
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})
/* open modal when the delete button is clicked**/
const deleteButton = document.querySelectorAll('.actions a.delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

function handleClick(event, check = true) {
  event.preventDefault()
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  //get the 'id' of the room
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/room/${roomId}/${questionId}/${slug}`)

  modalTittle.innerHTML = `${text} esta pergunta`
  modalDiscription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  //change the delete button color
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  //Open modal
  modal.open()
}
