import React from "react";
// import React, { useState, useContext } from "react";

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Город" />
        <button>Получить данные</button>
    </form>
)

export default Form;