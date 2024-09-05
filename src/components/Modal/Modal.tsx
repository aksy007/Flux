import React, { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import styles from  './Modal.module.scss';

interface ModalProps {
  handleClose: () => void;
  show: boolean;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ handleClose, show, children }) => {

  return (
    show ? 
    <div className={styles.modal}>
      <div className={styles.modalOverlay} onClick={handleClose} />
      <section className={styles.main}>
        {children}
        <div className={styles.closeIcon} onClick={handleClose}>
          <CloseIcon />
        </div>
      </section>
    </div>
    : null 
  );
};

export default Modal;
