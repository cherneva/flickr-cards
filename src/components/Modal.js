import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ children }) => 
    ReactDOM.createPortal(
      <>
        {children}
      </>,
      document.getElementById("modal-root")
    );

export default Modal;