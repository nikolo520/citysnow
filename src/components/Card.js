import React from "react";
import { Col, Row } from "reactstrap";

function Card(props){
    return(
        <div className="card mb-2">
            <Row>
                <Col md="4" className="cut-images">
                    <a href={props.url} target="_blank">
                        <img src={props.urlToImage} alt={props.title} />
                    </a>
                </Col>
                <Col md="8">
                    <Row>
                        <Col xs="8">
                            <a href={props.url} target="_blank"><p className="h4 card-title">{props.title}</p></a>
                        </Col>
                        <Col xs="4">
                            <p className="card-site">{props.source}</p>
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