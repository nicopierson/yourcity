import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const ModalContext = React.createContext();

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();


  useEffect(() => {
    setValue(modalRef.current);
  }, [])

  return (
    <>
      <ModalContext.Provider 
        value={value}
      >
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function ModalCreateCity({ onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_background} onClick={onClose} />
      <div className={styles.modal_content}>
        {children}
      </div>
    </div>,
    modalNode
  );
}

export function ModalVerify({ offVerify, onClose, children }) {
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  const verifyAndClose = () => {
    offVerify();
    onClose();
  }

  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <div className={styles.modal_background} />
      <div className={`${styles.modal_content} ${styles.modal_verify}`}>
        {children}
        <div className={styles.display_buttons}>
          <div  className={styles.button_style_stay} onClick={offVerify}>Stay</div>
          <div className={styles.button_style_exit} onClick={verifyAndClose}>Exit</div>
        </div>
      </div>
    </div>,
    modalNode
  );
}