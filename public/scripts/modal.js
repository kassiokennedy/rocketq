export default function Modal() {
  function open() {
    //funcionalidade de atribuir classe active para a modal
    document.querySelector('.modal-wrapper').classList.add('active')
  }
  function close() {
    //funcionalidade de remover classe active para a modal
  }

  return {
    open,
    close
  }
}
