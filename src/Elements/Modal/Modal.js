import React from 'react';
import SecondaryButton from '../SecondaryButton/SecondaryButton';

import classes from './Modal.Module.css';

const Modal = (props) => {

  let modalContent;
  if (props.withSpinner) {
    modalContent = props.children
  } else {
    modalContent = (
    <>
      <p>
        {props.children}
      </p>
      <SecondaryButton onClick={props.closeModal}>
        Close
      </SecondaryButton>
    </>
    )
  }

  return (    
    <div className={classes.ModalBg}>
      <div className={classes.Modal}>
        {modalContent}
      </div>
    </div>
  );
}

export default Modal;