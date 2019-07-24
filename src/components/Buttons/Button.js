import React from 'react';
import style from './ButtonStyles.module.css';

const Button = props => {
  const {
    text,
    onClick,
    className,
    disabled,
  } = props;

  return (
    <button
      onClick={onClick}
      className={[style.button, className].join(' ')}
      disabled={disabled}
    >
      {text}  
    </button>
  );
};

export default Button;