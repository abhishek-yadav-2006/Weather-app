import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';
import {dotenv} from "dotenv"

dotenv.config()

export default function SearchBox({ updateInfo }) {
    let [city, setcity] = useState("");
    const API_KEY = process.env.API_KEY

    const getWeatherinfo = async () => {
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      
            let response = await fetch(API_URL)
            console.log(response)
            let jsonresponse = await response.json();
            console.log(jsonresponse)
            let result = {
                city: jsonresponse.name,
                temp: jsonresponse.main.temp,
                maxtemp: jsonresponse.main.temp_max,
                mintemp: jsonresponse.main.temp_min,
                humidity: jsonresponse.main.humidity,
                feelslike: jsonresponse.main.feels_like,
                description: jsonresponse.weather[0].description
            }
            console.log(result)
            return result
        
    }

    let handleInputChange = (event) => {
        setcity(event.target.value)



    }

    let handleSubmit = async (event) => {
        event.preventDefault();

        console.log(city);
        let newinfo = await getWeatherinfo();
        updateInfo(newinfo)
        setcity("")

    }
    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit} >

                <h1>search for the weather</h1>
                <TextField id="city" label="city name" variant="outlined" onChange={handleInputChange} required />
                <br /><br />
                <Button variant="contained" type='submit'>Search</Button>
            </form>

        </div>
    )
}