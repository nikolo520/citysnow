import React from "react";
import Feed from './Feed';
import Aside from './Aside';
import { Container, Row } from 'reactstrap';

function Board(props){
    if(Object.keys(props.data).length === 0){
        return(<div className="empty">No se encontraron resultados :(</div>)
    }else{
        return(
            <Container className="mt-3 board">
                <Row>
                    <Feed data={props.data.articles} />
                    <Aside data={props.data.weather} />
                </Row>
            </Container>
        );
    }
    
}

export default Board;