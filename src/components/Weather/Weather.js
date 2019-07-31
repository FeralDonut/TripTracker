import React, {useState, useEffect} from 'react';
import WeatherCard from './WeatherCard';

const API_KEY = 'c9264b2f05d21e20ac8a0f1af1e7f7c9';

const WeatherAPI = () => {
  const[fullData, setFullData] = useState([])
  const[dailyData, setDailyData] = useState([])
  const[degreeType, setDegreeType] = useState("fahrenheit")

    useEffect(() => {

      const weatherURL =
      `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${API_KEY}`

      fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
        setFullData(data.list)
        setDailyData(dailyData)
    })
    }, [])
    console.log("DAILYDATA", dailyData)
    console.log("FULLDATA",fullData)

    return (
      <div className="container">
      <h1 className="display-1 jumbotron">5-Day Forecast.</h1>
      <h5 className="display-5 text-muted">New York, US</h5>
        <div className="row justify-content-center">
        {(dailyData)? (dailyData.map((reading, index) => <WeatherCard reading={reading} key={index} />)) : <div>no weather</div>}
        {/* <div>{fullData}</div>
        <div>{dailyData}</div> */}
      </div>
      </div>
    )
}

export default WeatherAPI;