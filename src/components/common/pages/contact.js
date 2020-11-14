import React from 'react';
import {SocialIcon} from 'react-social-icons';
import {Container, Row, Col} from 'reactstrap';

function Contact() {
    return (
        <Container className="contactContainer">
            <Row>
                <Col>
                    <h2>Check us out!</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <div className="contactText">
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
            <Row>
                <Col>
                    <SocialIcon url="http://twitter.com"/>
                </Col>
                <Col>
                    <SocialIcon url="http://instagram.com"/>
                </Col>
                <Col>
                    <SocialIcon url="http://pintrest.com.au"/>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default Contact;