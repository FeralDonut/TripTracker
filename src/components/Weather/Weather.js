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

    return (
      <div className="container">
          <div className="row justify-content-center">
          {(dailyData)? (dailyData.map((reading, index) => <WeatherCard reading={reading} key={index} />)) : <div>no weather</div>}
          </div>
      </div>
    )
}

export default WeatherAPI;