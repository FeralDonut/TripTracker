import React from 'react';
import CreateEateryForm from '../CreateEateryForm/CreateEateryFormContainer';
import Button from '../../Buttons/Button';
import style from './CreateEateryStyles.module.css';

const CreateEatery = props => {
  const { id , addEatery} = props;

  return (
    <div>
      {
        id ? <CreateEateryForm />
        : <Button
            className={style.create_eatery}
            onClick={() => addEatery()}
            text="+"
          />
      }
    </div>
  );
};

export default CreateEatery;