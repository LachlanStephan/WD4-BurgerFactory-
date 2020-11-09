import React from 'react';
import SimpleMap from '../map/map';
import { Container, Row, Col } from 'reactstrap';

function Location() {
  return(
    <Container className="locationContainer">
      <Row>
        <Col className="locationHeader">
          <h2>Please visit us here!</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <SimpleMap />
        </Col>
      </Row>
    </Container>
  )
}

export default Location;