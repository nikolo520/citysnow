
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
      console.log(e.target.value)
      setTextInput({
          ...textInput,
          [name]:value
      })
  }
  
  useEffect(()=>{
    if (typeof(textInput.city) !== 'undefined'){
        const api_key = "62378f67cf044057bf2e6fa94e83d4b7"
        var baseUrl = "https://newsapi.org/v2/everything?"+
                        "sortBy=popularity"+
                        "&from=2021-09-05"+
                        "&apiKey=" + api_key +
                        "&q=" + textInput.city
        const search_data = async() =>{
            await axios.get(baseUrl)
            .then(response=>{
                if(response.data.status === "ok"){
                  console.log("ok")
                  console.log(response.data)
                  setData({'articles':response.data.articles,'weather':{}});
                }else{
                  setData(emptyState);
                }
            }).catch(error=>{
                console.log(error);
            })
        }
        search_data();
    }else{
        console.log("No hay criterios de busqueda")
    }
},[]);
  return (
    <div className='App'>
      <Menu nameapp="Citysnow" logoapp='https://image.flaticon.com/icons/png/512/1113/1113775.png' onInputChange={handleChange} setData={setData}/>
      <Board data={data} />
    </div>
  );
}

export default App;
