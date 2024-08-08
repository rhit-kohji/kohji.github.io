import React from 'react';
import styles from './Modal.module.css';
import creditsImg from '../../../assets/icons/credits.png';

export const Modal = ({ isOpen, onClose }) => {
  return (
    isOpen &&
    <div onClick={onClose} className={styles.overlay}>
        <div onClick={(event) => {
            event.stopPropagation() // prevents modal from closing when clicked
        }} className={styles.modalContainer}>
            <p onClick={onClose} className={styles.closeBtn}>X</p>
            <div className={styles.title}>
                <img className={styles.creditsImg} src={creditsImg} alt="Credits Icon" />
                <h1>Thank you for contributing to my website!</h1>
            </div>
            <div className={styles.content}>
                <a href="https://www.flaticon.com/free-icons/letter-j" title="letter j icons">Letter j icons created by shohanur.rahman13 - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/gratitude" title="gratitude icons">Gratitude icons created by Freepik - Flaticon</a>
            </div>
        </div>
    </div>
  )
}