import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './SearchBox.css';


export default function SearchBox({updateInfo}) {
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="0889d7035eacca9168cefe35a10a349c";
    
    let getWeatherInfo=async ()=>{
        let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse=await response.json();
        let result={
            city: city,
            feelsLike: jsonResponse.main.feels_like,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            weather: jsonResponse.weather[0].description,
            time: convertUnixToReadable(jsonResponse.sys.sunrise),
        };
        console.log(result);
        return result;
    }
    
    const convertUnixToReadable = (timestamp) => { 
        const date = new Date(timestamp * 1000);  
        return date.toLocaleTimeString(); 
    };

    let [city, setCity]=useState("");



    
    let handleChange=(evt)=>{
        setCity(evt.target.value);
    }

    let handleSubmit= async(evt)=>{
        evt.preventDefault();
        console.log("city");
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    };


    return(
        <div className='searchBox'>
            <h1>Search for the Weather</h1>
            <form onSubmit={handleSubmit}>
                <TextField id="city" className='search' label="City Name" variant="outlined" required value={city} onChange={handleChange} />
                <br /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}