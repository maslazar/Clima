import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Weather from './components/Weather'

function App() {
  const [weatherInfo, setweatherInfo] = useState(null) 

const success = (pos) => {
  const lat = pos.coords.latitude
  const lon = pos.coords.longitude
  const API_KEY ="b7980cc1fb5a48f354eb35f297f41583"

  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`

  axios.get(URL)
    .then(({data}) => setweatherInfo(data)) 
    .catch((err)=> console.log(err))  
    
}

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success)
  }, [])

  return (
    <main className='bg-black min-h-screen text-white flex justify-center items-center'>
      <Weather weatherInfo={weatherInfo}/>
      
    </main>
  )
}

export default App
