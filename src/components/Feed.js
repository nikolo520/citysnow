import React from "react";
import Card from './Card';

function Feed(props){
    if (typeof(props.data) === 'undefined'){
        return (<div>No hay resultados</div>)
    }else{
        return(
            <div className="col-9">
                {
                    props.data.map(obj=>(
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
}

export default Feed;