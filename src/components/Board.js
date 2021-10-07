import React from "react";
import Feed from './Feed';
import Aside from './Aside';
import { Container, Row } from 'reactstrap';

function Board(props){
    if(typeof(props.data) === 'undefined'){
        return(<div className="empty"></div>)
    }else{
        return(
            <Container className="board">
                <Row>
                    <div class="history mt-3 align-left">
                        <small class="history-item active">Búsquedas recientes: </small> 
                        {
                            props.data.history.map(obj=>(
                                <small class="history-item active">{obj}</small>
                            ))
                        }
                    </div>
                </Row>
                <Row>
                    <Feed data={props.data.articles} />
                    <Aside data={props.data.weather} />
                </Row>
            </Container>
        );
    }
    
}

export default Board;