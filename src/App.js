
import './App.css';
import Menu from './components/Menu';
import Board from './components/Board';
import React, { useState, useEffect } from "react";
import axios from 'axios';

function App() {
  const emptyState = {'articles':[],'weather':{}};
  const [data, setData]=useState(emptyState);
  const[textInput, setTextInput]= useState('');
  
  const handleChange=e=>{
      const {name, value} = e.target;
      setTextInput({
          ...textInput,
          [name]:value
      })
  }

  useEffect(()=>{
    if (typeof(textInput.city) !== 'undefined'){
        const api_key_newsapi = "62378f67cf044057bf2e6fa94e83d4b7"
        const api_key_openw = "d18b3f14b2856e2a84196c94143efd95"
        var baseUrlNews = "https://newsapi.org/v2/everything?"+
                        "sortBy=popularity"+
                        "&from=2021-09-05"+
                        "&apiKey=" + api_key_newsapi +
                        "&q=" + textInput.city
        const search_news = async() =>{
            await axios.get(baseUrlNews)
            .then(response=>{
                if(response.data.status === "ok"){
                  setData({'articles':response.data.articles,'weather':{}});
                }else{
                  setData(emptyState);
                }
            }).catch(error=>{
                console.log(error);
            })
        }
        search_news();
        var baseUrlOpen = "https://api.openweathermap.org/data/2.5/weather?"+
                        "&units=metric" +
                        "&appid=" + api_key_openw +
                        "&q=" + textInput.city
        console.log(baseUrlOpen)
        const search_weather = async() =>{
          await axios.get(baseUrlOpen)
          .then(response=>{
              console.log(response.data)
              if(response.data.status === "ok"){
                setData({'articles': data.articles,'weather':response.data.main});
              }else{
                setData({'articles': data.articles,'weather':{}});
              }
          }).catch(error=>{
              console.log(error);
          })
        }
        search_weather();
    }else{
        console.log("No hay criterios de busqueda")
    }
},[]);
  return (
    <div className='App'>
      <Menu nameapp="Citysnow" logoapp='https://image.flaticon.com/icons/png/512/1113/1113775.png' onInputChange={handleChange} search={setData}/>
      <Board data={data} />
    </div>
  );
}

export default App;
