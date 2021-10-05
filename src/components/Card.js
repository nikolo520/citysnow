import React from "react";
import { Col, Row } from "reactstrap";
import axios from 'axios';

function Card(props){
    
    return(
        <div className="card">
            <Row>
                <Col md="4" className="cut-images">
                    <a href={props.url}>
                        <img src={props.urlToImage} alt={props.title} />
                    </a>
                </Col>
                <Col md="8">
                    <Row>
                        <Col xs="8">
                            <a href={props.url}><p className="h4 card-title">{props.title}</p></a>
                        </Col>
                        <Col xs="4">
                            <a href={props.url}><p className="card-site">{props.source.name}</p></a>
                        </Col>
                    </Row>
                    <Row>
                        <p className="card-description">{props.description}</p>
                    </Row>
                    <Row>
                        <p className="card-foo"><span className="blockquote-footer">{props.author}</span></p>
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Card;