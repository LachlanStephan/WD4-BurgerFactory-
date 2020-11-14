import React from 'react';
import SimpleMap from '../map/map';
import {Container, Row, Col} from 'reactstrap';

function Location() {
    return (
        <Container className="locationContainer">
            <Row>
                <Col className="locationHeader">
                    <h2>Please visit us here!</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <SimpleMap/>
                </Col>
            </Row>
            <hr></hr>
        </Container>
    )
}

export default Location;