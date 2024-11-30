import React from "react";
import "../styles/components/Modal.css";

function Modal({ onClose, onConfirm }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>Deseja sair da conta?</p>
        <div className="modal-actions">
          <button className="modal-button no" onClick={onClose}>Não</button>
          <button className="modal-button yes" onClick={onConfirm}>Sim</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
