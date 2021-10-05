import React from "react";
import Panel from './Panel';
function Aside(props){
    return(
        <div className="col-3">
            <Panel val={props.data.temp} title="Temperatura"/>
            <Panel val={props.data.feels_like} title="Sensación Térmica"/>
            <Panel val={props.data.temp_min} title="Temperatura Mínima"/>
            <Panel val={props.data.temp_max} title="Temperatura Máxima"/>
            <Panel val={props.data.pressure} title="Presión"/>
            <Panel val={props.data.humidity} title="Humedad"/>
        </div>
    );
}

export default Aside;