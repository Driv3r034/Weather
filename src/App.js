import React, { useState } from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY ="6a0a64df3f3462685f2ace2e35ca9ecc";

// const App = () => {

export default function App () {

    // state = {
    //     temp: null,
    //     city: null,
    //     country: null,
    //     sunrise: null,
    //     sunset: null,
    //     pressure: null,
    //     error: null
    // }

    let [stateWeather, setStateWeather] = useState({
            temp: null,
            city: null,
            country: null,
            sunrise: null,
            sunset: null,
            pressure: null,
            error: null
        })

    console.log(App);
    console.log(useState.temp);
    console.log(stateWeather);
    console.log(setStateWeather);

    const gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;
        // const dataSet =

        if(city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            //units — Тип градусов;
            const data = await api_url.json();
            console.log(data);
            console.log(city);
            console.log(event);
            console.log(stateWeather);
            console.log(gettingWeather);
            console.log(setStateWeather);

            if (data && data.name) {
                let sunsetInSec = data.sys.sunset
                let dateSunset = new Date(sunsetInSec * 1000)
                let timeSunset = dateSunset.toLocaleTimeString()

                let sunriseInSec = data.sys.sunrise
                let dateSunrise = new Date(sunriseInSec * 1000)
                let timeSunrise = dateSunrise.toLocaleTimeString()

                setStateWeather({
                    temp: Math.round(data.main.temp),
                    city: data.name,
                    country: data.sys.country,
                    sunrise: timeSunrise,
                    sunset: timeSunset,
                    pressure: data.main.pressure,
                    error: null
                });
            } else {
                setStateWeather({
                    temp: null,
                    city: null,
                    country: null,
                    sunrise: null,
                    sunset: null,
                    pressure: null,
                    error: "Нет такого города! =("
                });
            }
        }   else {
            setStateWeather({
                temp: null,
                city: null,
                country: null,
                sunrise: null,
                sunset: null,
                pressure: null,
                error: "Нет города, нет погоды! =)"
            });
        }
    }

    // render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info />
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={gettingWeather} />
                                <Weather
                                    temp={stateWeather.temp}
                                    city={stateWeather.city}
                                    country={stateWeather.country}
                                    sunrise={stateWeather.sunrise}
                                    sunset={stateWeather.sunset}
                                    pressure={stateWeather.pressure}
                                    error={stateWeather.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    // }
}
console.log(Weather.temp);
console.log(Form.weatherMethod);
console.log(Info);

// export default App;