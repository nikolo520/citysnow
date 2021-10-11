import React from "react";
import { Row } from "reactstrap";
function Aside(props){
    if (Object.keys(props.data).length == 0){
        return (<div></div>)
    }else{
        return(
            <div className="col-3 panel">
                <Row>
                    <p>Temperatura</p>
                    <p><span className="display-5 vertical-center">{props.data.temp}°</span><img src={"http://openweathermap.org/img/wn/"+props.data.icon+"@2x.png" } target="Weather"/></p>
                </Row>
                <Row>
                    <p>Sensación Térmica</p>
                    <h1 className="display-5">{props.data.feels_like}°</h1>
                </Row>
                <Row>
                    <p>Temperatura Mínima</p>
                    <h1 className="display-5">{props.data.temp_min}°</h1>
                </Row>
                <Row>
                    <p>Temperatura Máxima</p>
                    <h1 className="display-5">{props.data.temp_max}°</h1>
                </Row>
                <Row>
                    <p>Presión</p>
                    <h1 className="display-5">{props.data.pressure} mbar</h1>
                </Row>
                <Row>
                    <p>Humedad</p>
                    <h1 className="display-5">{props.data.humidity}%</h1>
                </Row>
            </div>
        );
    }
}

export default Aside;