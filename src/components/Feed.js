import React, { useState, useEffect } from "react";
import Card from './Card';
import axios from 'axios';

function Feed(props){
    const [data, setData]=useState([]);
    const[textInput, setTextInput]= useState({});

    useEffect(()=>{
        console.log()
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
                        setData(response.data.articles );
                    }else{
                        setData({})
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
    return(
        <div className="col-9">
            {
                data.map(obj=>(
                    <Card 
                        title={obj.title}
                        url={obj.url}
                        urlToImage={obj.urlToImage}
                        author={obj.author}
                        description={obj.description}
                        source={obj.source}
                    />
                ))
            }
        </div>
    );
}

export default Feed;