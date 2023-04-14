import React from 'react';
import styles from './button.module.css';

const Button = ({ index, onClick, disabled }) => {
  return (

    <div className={styles.centered}>
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={styles[index]}
    >
    </button>
    </div>
    

  );
};

export default Button;