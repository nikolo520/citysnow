import React from "react";
import { Row } from "reactstrap";
function Aside(props){
    if (typeof(props.data.main) === 'undefined'){
        return (<div>No hay resultado</div>)
    }else{
        return(
            <div className="col-3 panel">
                <Row>
                    Temperatura
                    <img src={"http://openweathermap.org/img/wn/"+props.data.weather[0].icon+"@2x.png" } target="Weather"/>
                    <h1 className="display-5">{props.data.main.temp}°</h1>
                </Row>
                <Row>
                    Sensación Térmica
                    <h1 className="display-5">{props.data.main.feels_like}°</h1>
                </Row>
                <Row>
                    Temperatura Mínima
                    <h1 className="display-5">{props.data.main.temp_min}°</h1>
                </Row>
                <Row>
                    Temperatura Máxima
                    <h1 className="display-5">{props.data.main.temp_max}°</h1>
                </Row>
                <Row>
                    Presión
                    <h1 className="display-5">{props.data.main.pressure}</h1>
                </Row>
                <Row>
                    Humedad
                    <h1 className="display-5">{props.data.main.humidity}</h1>
                </Row>
            </div>
        );
    }
}

export default Aside;