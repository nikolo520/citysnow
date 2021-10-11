import React from "react";
import Feed from './Feed';
import Aside from './Aside';
import { Container, Row } from 'reactstrap';

function Board(props){
    return(
        <Container className="board mt-2">
            <Row>
                <Feed data={props.articles} />
                <Aside data={props.weather} />
            </Row>
        </Container>
    );
}

export default Board;