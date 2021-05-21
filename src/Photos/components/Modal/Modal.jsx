import React, {useEffect} from 'react';
import { createPortal } from 'react-dom'

import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')

export default function Modal({closeModal, children}) {

  useEffect(() => {
     const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
           closeModal();
        }
    } 
    window.addEventListener('keydown', handleKeyDown);

    return () => {
       window.removeEventListener('keydown',handleKeyDown)
    }
   }, [closeModal])
  
    return (
      
      createPortal(<div onClick={closeModal}  className={styles.Overlay}>
        <div className={styles.Modal}>
         {children}
        </div>
      </div>,modalRoot)
  )
};

  