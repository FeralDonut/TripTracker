import React from "react";
import CreatePackingListForm from "../CreatePackingListForm/CreatePackingListFormContainer";
import Button from "../../Buttons/Button";
import style from "./CreatePackingListStyles.module.css";

const CreatePackingList = props => {
  const { id, addPackingList, tripID, apiCall } = props;

  return (
    <div>
      {id ? (
        <CreatePackingListForm tripID={tripID} apiCall={apiCall} />
      ) : (
        <Button
          className={style.create_packing_list}
          onClick={() => addPackingList()}
          text="+"
        />
      )}
    </div>
  );
};

export default CreatePackingList;
