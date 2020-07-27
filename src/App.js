import React, { useState } from 'react';
import './App.css';
import Modal from './components/modal/modal';

function App() {
  const [showModal, setShowModal] = useState(true)
  const [isModalConfirmed, setIsModalConfirmed] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  }

  const handleConfirmModal = () => {
    setIsModalConfirmed(true);
  }

  return (
    <div className="App">
    {isModalConfirmed && (
      <h3>The modal action has been confirmed</h3>
    )}
      {showModal && (
        <Modal
          handleCloseAction = {handleCloseModal}
          handleConfirmAction={handleConfirmModal}
        >
        <p>If you continue this action, your password will change.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
