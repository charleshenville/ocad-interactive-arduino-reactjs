import React from 'react';
import styles from './button.module.css';

const Button = ({ index, onClick, disabled }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={styles[index]}
    >
    </button>
  );
};

export default Button;