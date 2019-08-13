import React from "react";
import { Alert, Card, CardText, CardBody, CardHeader } from "reactstrap";
import moment from "moment";
import style from "./TripCardStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faTrashAlt);

const handleDelete = tripID => {
  console.log("DELETE", tripID);
  console.log(`http://24.4.98.147:8000/api/trips/${tripID}/`);
  fetch(`http://24.4.98.147:8000/api/trips/${tripID}/`, {
    method: "DELETE"
  }).then(
    response =>
      response.json().then(json => {
        return json;
      })
    // .then(apiCall)
  );
};

const TripCard = props => {
  const {
    id,
    title,
    startDate,
    endDate,
    description,
    locations,
    onclick
  } = props;

  return (
    <Card className={style.tripcard} key={id} onClick={onclick}>
      <CardHeader className={style.card_header}>
        <Alert color={""}>{title}</Alert>
        <div className={style.trip_icons_container}>
          {/* <div className={style.edit_trip}>
            <FontAwesomeIcon icon="edit" />
          </div> */}
          <div className={style.delete_trip} onClick={() => handleDelete(id)}>
            <FontAwesomeIcon icon="trash-alt" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <CardText className={style.location_container}>
          <span className={style.location}>
            <label className={style.fontWeight}>
              {locations ? locations.city : null}
            </label>
            {"City"}
          </span>
          <span className={style.date}>
            <label className={style.fontWeight}>
              {moment(startDate).format("MMM Do YYYY")}
            </label>
            {"Start Date"}
          </span>
        </CardText>
        <CardText>
          <span className={style.date_container}>
            <span className={style.location}>
              <label className={style.fontWeight}>
                {locations ? locations.region : null},{" "}
                {locations ? locations.country : null}
              </label>
              {"Country"}
            </span>
            <span className={style.date}>
              <label className={style.fontWeight}>
                {moment(endDate).format("MMM Do YYYY")}
              </label>
              {"End Date"}
            </span>
          </span>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default TripCard;
