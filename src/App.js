
import './App.css';
import Menu from './components/Menu';
import Board from './components/Board';
import React, { useState, useEffect } from "react";
import axios from 'axios';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      server:"local",
      history:[],
      articles:[],
      weather:{},
    }
    this.onSearch = this.onSearch.bind(this);
    this.refresh_articles = this.refresh_articles.bind(this);
    this.refresh_weather = this.refresh_weather.bind(this);
    this.onChangeServer = this.onChangeServer.bind(this);
  }

  register_search(word){
    this.setState((state,props) =>({
      articles : state.articles,
      weather : state.weather,
      history : state.history.push({'word':word,'info':{}}),
      server : state.server,
    }));
  }
  refresh_articles(articles){
    if(this.state.server=== "remote"){
      articles = articles.articles
      articles.forEach(element => element['sourc'] = element.source.name)
    }

    this.setState((state,props) =>({
      articles : articles,
      weather : state.weather,
      history : state.history,
      server : state.server,
    }));
  }

  onChangeServer(server){
    this.setState((state,props) =>({
      articles : state.articles,
      weather : state.weather,
      history : state.history,
      server : server,
    }));
    console.log(this.state)
  }

  refresh_weather(weather){
    if(this.state.server=== "remote"){
      let temp_icon = weather.weather[0].icon
      weather = weather.main
      weather['icon'] = temp_icon
    }
    this.setState((state,props) =>({
      articles : state.articles,
      weather : weather,
      history : state.history,
      server : state.server,
    }));
    console.log(this.state)
  }

  get_articles = (city) =>{
    if(this.state.server=== "local"){
      var baseUrlNews = "http://localhost:42219/api/articles/" + city
    }else{
      var baseUrlNews = "https://newsapi.org/v2/everything?"+
                     "sortBy=popularity"+
                     "&from=2021-10-01"+
                     "&apiKey=1f689dc583ac485bb742e145f348bbcf"+
                     "&q="+ city;
    }
    console.log(baseUrlNews)
    axios.get(baseUrlNews)
    .then(response => {
      if(response.status = 200){
        this.refresh_articles(response.data)
      }else{
        console.log(response)
      }
        // data.history.push(textInput.city)
        // if(response.data[0].status){
        //   setData({'articles':response.data[0].articles,'weather':response.data[0].weather,'history':data.history});
        // }else{
        //   setData({'articles':[],'weather':{},'history':data.history});
        // }
    }).catch(error=>{
      //setData({'articles':[],'weather':{},'history':data.history});
      console.log("Error al intentar consultar los datos");
      console.log(error);
    })
  };

  get_weather = (city) =>{
    if(this.state.server=== "local"){
      var baseUrl = "http://localhost:42219/api/weather/" + city
    }else{
      var baseUrl = "https://api.openweathermap.org/data/2.5/weather?"+
                       "&units=metric" +
                       "&appid=3c8b3f0976f6ec841aa878e05d98bab5" +
                       "&q="+ city;
    }
    console.log(baseUrl)
    axios.get(baseUrl)
    .then(response => {
      if(response.status = 200){
        this.refresh_weather(response.data)
      }else{
        console.log(response)
      }
        // data.history.push(textInput.city)
        // if(response.data[0].status){
        //   setData({'articles':response.data[0].articles,'weather':response.data[0].weather,'history':data.history});
        // }else{
        //   setData({'articles':[],'weather':{},'history':data.history});
        // }
    }).catch(error=>{
      //setData({'articles':[],'weather':{},'history':data.history});
      console.log("Error al intentar consultar los datos");
      console.log(error);
    })
  };

  emptyState(){
    this.setState((state,props) =>({
        articles:[],
        weather:{},
        history: [...state.history],
        server: state.server,
      }));
  }

  onSearch(query){
    if(query===''){
      this.emptyState();
    }else{
      this.get_articles(query)
      this.get_weather(query)
    }
  }

  render(){
    return (
        <div className='App'>
          <Menu
            nameapp="Citysnow"
            logoapp= "http://openweathermap.org/img/wn/02d@2x.png"
            onsearch={this.onSearch}
            onchangetext={this.onChangeText}
            onchangeserver={this.onChangeServer}
            server={this.state.server}
            history={this.state.history}
            />
          <Board articles={this.state.articles} weather={this.state.weather}/>
        </div>
      );
  }
}

export default App;
