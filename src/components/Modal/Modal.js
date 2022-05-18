import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as Close} from '../../icon/close.svg'

import styles from './Modal.module.css'; 
 
 const modalRoot = document.querySelector('#modal-root');

 const Modal = ({children, toggle}) => ReactDOM.createPortal(
    <React.Fragment>
        <div className={styles.modalBackdrop} onClick={e => (e.currentTarget === e.target) && toggle()}>
            <div className={styles.modalContent} >
                <button type="button" onClick={toggle} className={styles.buttonClose}>
                    <Close/>
                </button>
                {children}
            </div>
        </div>
    </React.Fragment>,modalRoot)




  export default Modal;