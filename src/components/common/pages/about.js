import React from 'react';
import {Container, Row, Col} from 'reactstrap';

function About() {
    return (
        <Container className="aboutContainer">
            <Row>
                <Col>
                    <h2>Read all about our operation here!</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row className="svgContainer">
                <Col>
                    <svg width="100" height="100">
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            height="90"
                            width="90"
                            strokeWidth="4"
                            id="rect1"/>
                        <rect
                            x="0"
                            y="0"
                            cx="20"
                            cy="20"
                            height="80"
                            width="80"
                            strokeWidth="4"
                            id="rect2"/>
                        <rect
                            x="0"
                            y="0"
                            cx="30"
                            cy="30"
                            height="70"
                            width="70"
                            strokeWidth="4"
                            id="rect3"/>
                    </svg>
                </Col>
                <Col>
                    <svg width="100" height="100">
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            height="90"
                            width="90"
                            strokeWidth="4"
                            id="rect1"/>
                        <rect
                            x="0"
                            y="0"
                            cx="20"
                            cy="20"
                            height="80"
                            width="80"
                            strokeWidth="4"
                            id="rect2"/>
                        <rect
                            x="0"
                            y="0"
                            cx="30"
                            cy="30"
                            height="70"
                            width="70"
                            strokeWidth="4"
                            id="rect3"/>
                    </svg>
                </Col>
                <Col>
                    <svg width="100" height="100">
                        <rect
                            x="0"
                            y="0"
                            rx="10"
                            ry="10"
                            height="90"
                            width="90"
                            strokeWidth="4"
                            id="rect1"/>
                        <rect
                            x="0"
                            y="0"
                            cx="20"
                            cy="20"
                            height="80"
                            width="80"
                            strokeWidth="4"
                            id="rect2"/>
                        <rect
                            x="0"
                            y="0"
                            cx="30"
                            cy="30"
                            height="70"
                            width="70"
                            strokeWidth="4"
                            id="rect3"/>
                    </svg>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="aboutText">
                        <p>Mauris mattis non mi ac gravida. Cras maximus ligula eu lectus cursus, ac
                            malesuada leo feugiat. Quisque lacinia posuere massa, vel sollicitudin sem
                            faucibus ac. Nullam ut neque massa. Etiam aliquam, mi vel venenatis ornare,
                            lorem purus facilisis elit, tincidunt aliquet massa metus ut magna. Phasellus
                            tincidunt, urna eget rhoncus tristique, ante diam bibendum eros, quis dictum
                            metus nulla sit amet massa. Nam tincidunt rutrum ex, et posuere felis
                            pellentesque ac. Aliquam erat volutpat. Etiam sollicitudin orci nec sem rutrum
                            consequat. Sed mattis turpis et felis egestas egestas.</p>
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default About;