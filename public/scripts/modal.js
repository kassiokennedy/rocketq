export default function Modal() {
  const cancelButton = document.querySelector('.button.cancel')
  const modalWrapper = document.querySelector('.modal-wrapper')
  cancelButton.addEventListener('click', close)

  function open() {
    //funcionalidade de atribuir classe active para a modal
    modalWrapper.classList.add('active')
  }
  function close() {
    //funcionalidade de remover classe active para a modal
    modalWrapper.classList.add('remove')
  }

  return {
    open,
    close
  }
}
