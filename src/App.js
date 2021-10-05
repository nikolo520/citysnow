
import './App.css';
import Menu from './components/Menu';
import Board from './components/Board';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const emptyState = {'articles':[],'weather':{}};
  const [data, setData] = useState(emptyState);
  const[textInput, setTextInput]= useState('');
  const handleChange=e=>{
      const {name, value} = e.target;
      setTextInput({
          ...textInput,
          [name]:value
      })
  }
  const api_key_newsapi = "8717808a38834ff5b95efaccfffb5f46"
  const api_key_openw = "cce17c4d20cdad7668feef63e8446aa3"
  var baseUrlNews = "https://newsapi.org/v2/everything?"+
                    "sortBy=popularity"+
                    "&from=2021-09-05"+
                    "&apiKey=" + api_key_newsapi;
  var baseUrlOpen = "https://api.openweathermap.org/data/2.5/weather?"+
                  "&units=metric" +
                  "&appid=" + api_key_openw;

  const get_data = () =>{
    console.log(textInput.city)
    var new_state = emptyState
    if (typeof(textInput.city) !== 'undefined'){
      // Si no hay nada escrito en el buscador, se obtiene la ubicación actual para la busqueda
      baseUrlNews += "&q=" + textInput.city;
      baseUrlOpen += "&q=" + textInput.city;
    }else{
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position){
          baseUrlNews += "&q=" + textInput.city;
          baseUrlOpen += "&lat=" + position.coords.latitude.toString() +"&lon=" + position.coords.longitude.toString();
        });
      }else{
        console.log("No se pudo acceder a la geolocalización")
      }
    }
    axios.get(baseUrlNews)
    .then(response=>{
        console.log(response)
        if(response.data.status === "ok"){
          new_state = {'articles':response.data.articles,'weather':data.weather};
        }else{
          setData(emptyState);
        }
    }).catch(error=>{
      new_state = {'articles': [],'weather':data.weather};
      console.log(baseUrlNews)
      console.log("Error al intentar consular las noticias");
    })
    axios.get(baseUrlOpen)
    .then(response=>{
      new_state = {'articles': [],'weather':response.data};
    }).catch(error=>{
      new_state = {'articles': [],'weather':{}};
      console.log(baseUrlOpen)
      console.log("Error al intentar consular el tiempo");
    })
    console.log(new_state)
    return new_state;
  }
  useEffect(()=>{
    setData(get_data());
  },[]);
  return (
    <div className='App'>
      <Menu
        nameapp="Citysnow"
        logoapp= "http://openweathermap.org/img/wn/02d@2x.png"
        data={data}
        onInputChange={handleChange}
        search={setData}
        get_data={get_data}
        />
      <Board data={data}/>
    </div>
  );
}

export default App;
