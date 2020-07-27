import React from 'react';
import './modal.css';
import ModalTitle from '../modal-title/modal-title';

const Modal = ({children, handleCloseAction, handleConfirmAction}) => {
  const closeModal = (e) => {
    e.preventDefault();
    handleCloseAction();
  }

  const confirmModal = (e) => {
    e.preventDefault();
    console.log('we are here')
    handleConfirmAction()
  }

  return (
    <div>
      <dialog open id="dialog">
        <form>
          <ModalTitle title="This is the title of the modal" />
          <div className="main-content">
            {children}
          </div>
          <footer className="modal-footer">
            <menu className="modal_buttons">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={confirmModal}>Confirm</button>
            </menu>
          </footer>
        </form>
      </dialog>
    </div>
  )
}

export default Modal
