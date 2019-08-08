import React from "react";
import CreateTodoForm from "../CreateTodoForm/CreateTodoFormContainer";
import Button from "../Buttons/Button";
import style from "./CreateTodoStyles.module.css";

const CreateTodo = props => {
  const { id, tripID, addTodo } = props;

  return (
    <div>
      {id ? (
        <CreateTodoForm tripID={tripID} />
      ) : (
        <Button
          className={style.create_todo}
          onClick={() => addTodo()}
          text="+"
        />
      )}
    </div>
  );
};

export default CreateTodo;
