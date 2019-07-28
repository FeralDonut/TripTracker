import React from 'react';
import Button from '../Buttons/Button';
import style from './FormStyles.module.css';

const Form = props => {
  const {
    legend,
    handleSave,
    handleDelete,
    disabled,
    children
  } = props;

  return (
    <form>
      <fieldset>
        <legend>{legend}</legend>
        {children}
        <div className={style.formButtons}>
          <Button
            text="Save"
            className={style.saveButton}
            onClick={handleSave}
            disabled={disabled}
          />
          <Button
            text="Delete"
            className={style.deleteButton}
            onClick={handleDelete}
          />
        </div>
      </fieldset>
    </form>
  );
};

export default Form;