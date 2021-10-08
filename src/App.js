import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY ="6a0a64df3f3462685f2ace2e35ca9ecc";

class App extends React.Component {

    state = {
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        pressure: null,
        error: null
    }

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if(city) {
            const api_url = await
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            console.log(data);
            console.log(city);
            console.log(event);

            if (data && data.name) {
                let sunsetInSec = data.sys.sunset
                let dateSunset = new Date(sunsetInSec * 1000)
                let timeSunset = dateSunset.toLocaleTimeString()

                let sunriseInSec = data.sys.sunrise
                let dateSunrise = new Date(sunriseInSec * 1000)
                let timeSunrise = dateSunrise.toLocaleTimeString()

                this.setState({
                    temp: Math.round(data.main.temp),
                    city: data.name,
                    country: data.sys.country,
                    sunrise: timeSunrise,
                    sunset: timeSunset,
                    pressure: data.main.pressure,
                    error: null
                });
            } else {
                this.setState({
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
            this.setState({
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

    render(){
        return(
            <div className="wrapper">
                <div className="main">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 info">
                                <Info />
                            </div>
                            <div className="col-sm-7 form">
                                <Form weatherMethod={this.gettingWeather} />
                                <Weather
                                    temp={this.state.temp}
                                    city={this.state.city}
                                    country={this.state.country}
                                    sunrise={this.state.sunrise}
                                    sunset={this.state.sunset}
                                    pressure={this.state.pressure}
                                    error={this.state.error}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;