import React from 'react';
import style from './InputStyles.css';

const Input = props => {
  const {
    id,
    name,
    onChange,
    type,
    placeholder,
    min,
    max,
    className,
    value,
    autoFocus
  } = props;

  return (
    <input
      id={id}
      name={name}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      min={min}
      max={max}
      className={[style.slider, className].join(' ')}
      value={value}
      autoFocus={autoFocus}
    />
  );
};

export default Input;