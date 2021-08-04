import React from 'react';
import styles from './Button.module.css';

export function Button({ children, selector, onClick }) {
    return <button className={`${styles.button} ${styles[selector]}`} onClick={onClick}>
        {children}
    </button>;
}

