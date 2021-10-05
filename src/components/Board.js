import React from "react";
import Feed from './Feed';
import Aside from './Aside';
import { Container, Row, Col } from 'reactstrap';

function Board(props){
    return(
        <Container>
            <Row>
                <Feed />
                <Aside />
            </Row>
        </Container>
    );
}

export default Board;