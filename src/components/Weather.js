import React from "react";

const Weather = props => {
    console.log(props)
    return (
    <div className="infoWeather">
        { props.city &&
        <div>
            <p>Местоположение: {props.city}, {props.country}</p>
            <p>Температура: {props.temp} °C</p>
            <p>Восход солнца: {props.sunrise}</p>
            <p>Заход солнца: {props.sunset}</p>
            <p>Давление: {props.pressure} гПа</p>
        </div>
        }
        <p className="error">{ props.error }</p>
    </div>
)};


// const Form = props => (
//     <form onSubmit={props.weatherMethod}>
//         <input type="text" name="city" placeholder="Город" />
//         <button>Получить данные</button>
//     </form>
// )

export default Weather;