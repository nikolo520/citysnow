import React from "react";
import { Col, Row } from "reactstrap";

function Panel(props){
    return(
        <Row>
            <div className="panel">
                <Col width="100%" heigth="auto">
                    <Row>
                        {props.title}
                    </Row>
                    <Row>
                        <h1 className="display-1">{props.val}</h1>
                    </Row>
                </Col>
            </div>
        </Row>
    );
}

export default Panel;