import React from "react";
import { Link } from "gatsby";
import {
  Alert,
  Card,
  CardText,
  CardBody,
  CardHeader,
  CardFooter
} from "reactstrap";
import moment from "moment";
import style from "./TripCardStyle.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faEdit, faTrashAlt);

const TripCard = props => {
  const {
    id,
    title,
    startDate,
    endDate,
    description,
    locations,
    onclick,
    triggerRerender
  } = props;

  const handleDelete = tripID => {
    console.log("DELETE", tripID);
    console.log(`http://24.4.98.147:8000/api/trips/${tripID}/`);
    fetch(`http://24.4.98.147:8000/api/trips/${tripID}/`, {
      method: "DELETE"
    }).then(response =>
      response
        .json()
        .then(json => {
          return json;
        })
        .then(triggerRerender)
    );
  };

  return (
    <Card className={style.tripcard} key={id} onClick={onclick}>
      <Link
        to="/individualTrip"
        style={{ textDecoration: "none", color: "black" }}
      >
        {" "}
        <CardHeader className={style.card_header}>
          <Alert color={""}>{title}</Alert>
          <div className={style.trip_icons_container}>
            {/* <div className={style.edit_trip}>
            <FontAwesomeIcon icon="edit" />
          </div> */}
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
                {startDate ? moment(startDate).format("MMM Do YYYY") : "---"}
              </label>
              {"Start Date"}
            </span>
          </CardText>
          <CardText>
            <span className={style.date_container}>
              <span className={style.location}>
                <label className={style.fontWeight}>
                  {locations ? locations.region : "---"},{" "}
                  {locations ? locations.country : "---"}
                </label>
                {"Country"}
              </span>
              <span className={style.date}>
                <label className={style.fontWeight}>
                  {endDate ? moment(endDate).format("MMM Do YYYY") : "---"}
                </label>
                {"End Date"}
              </span>
            </span>
          </CardText>
        </CardBody>
      </Link>
      <CardFooter>
        {/* <div className={style.delete_trip} onClick={() => handleDelete(id)}> */}
        <FontAwesomeIcon icon="trash-alt" onClick={() => handleDelete(id)} />
        {/* </div> */}
      </CardFooter>
    </Card>
  );
};

export default TripCard;
