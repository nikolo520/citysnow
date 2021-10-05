import React from "react";
import { Col, Row, Media } from "reactstrap";

function Card(props){
    return(
        <div className="tarjeta">
            <Row>
                <Col xs="3">
                    <img className="img" data-src="https://cdn-icons-png.flaticon.com/512/2540/2540832.png" alt="Noticia" />
                </Col>
                <Col xs="9">
                    <div>
                        <div className="text-left">What is Lorem Ipsum?</div>
                        <div className="text-left">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Card;