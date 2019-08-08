import React from "react";
import moment from "moment";
import "../../css/owfont-master/css/owfont-regular.css";
import "./WeatherCardStyle.module.css";

const WeatherCard = ({ reading, degreeType }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const fahrenheit = Math.round(reading.main.temp);
  const celsius = Math.round(((fahrenheit - 32) * 5) / 9);

  const imgURL = `owf owf-${reading.weather[0].id} owf-3x`;

  return (
    <div className="col-sm-2">
      <div className="card align-items-center">
        <div className="card-body">
          <h5 className="card-title">{moment(newDate).format("MMM Do")}</h5>
          <i className={imgURL} />
          <h6>
            {degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}
          </h6>
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
