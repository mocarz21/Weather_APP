import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import ErrorBox from '../ErrorBox/ErrorBox'
import { useState } from 'react'

const WeatherBox = props => {

  const [weatherData, setWeatherData] =useState('')
  const [loading, setLoading]=useState(false)
  const [error, setError] =useState(false)
  
  const handleCityChange =params=>{
    setError(false)
    setLoading(true)
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${params}&appid=6fc895340de842d76d6dfd3a77205ba1&units=metric`)
    .then(res => {
      if(res.status === 200) {
        return res.json()
          .then(data => {

          setWeatherData({
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].description
          })
          setLoading(false)
          
        })
      } else {
        
        setError(true)
      }
  });
    
  }

  return (
    <section>
      <PickCity action={handleCityChange} />
      {(weatherData &&  !error && !loading) &&<WeatherSummary wetherData={weatherData} />} {/*Nie wiem jak mam zrobic zeby w momecie wpisania złej nazwy miasta nie e wyswietlalo weatherSummary */}
      {error && <ErrorBox city={props}/>}
      {(weatherData && loading && !error) &&  <Loader />}
    </section>
  )
};

export default WeatherBox;