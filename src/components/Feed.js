import React from "react";
import Card from './Card';

function Feed(props){
    if (props.data.length == 0){
        return (<div className="empty mt-5">No hay resultados</div>)
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
                            source={obj.sourc}
                        />
                    ))
                }
            </div>
        );
    }
}

export default Feed;