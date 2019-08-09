import React, { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import DegreeToggle from "./DegreeToggle";

const API_KEY = "c9264b2f05d21e20ac8a0f1af1e7f7c9";

const WeatherAPI = ({ zip }) => {
  const [fullData, setFullData] = useState([]);
  const [dailyData, setDailyData] = useState([]);
  const [degreeType, setDegreeType] = useState("fahrenheit");

  useEffect(() => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=${zip}&units=imperial&APPID=${API_KEY}`;

    fetch(weatherURL)
      .then(res => res.json())
      .then(data => {
        const dailyData = data.list.filter(reading =>
          reading.dt_txt.includes("18:00:00")
        );
        setFullData(data.list);
        setDailyData(dailyData);
      });
  }, []);

  const updateForecastDegree = event => {
    console.log(event.target.value);
    setDegreeType(event.target.value);
  };
  return (
    <>
      <DegreeToggle
        degreeType={degreeType}
        updateForecastDegree={updateForecastDegree}
      />
      <div className="container">
        <div className="row justify-content-center m-4">
          {dailyData ? (
            dailyData.map((reading, index) => (
              <WeatherCard
                reading={reading}
                key={index}
                degreeType={degreeType}
              />
            ))
          ) : (
            <div>no weather</div>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherAPI;
