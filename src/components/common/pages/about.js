import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function About() {
  return(
    <Container className="aboutContainer">
      <Row>
        <Col>
          <h2>Read all about our operation here!</h2>
        </Col>
      </Row>
      <Row className="svgContainer">
        <Col>
          <svg width="100" height="100">
            <rect cx="50" cy="50" stroke-width="4" />
          </svg>
        </Col>
        <Col>
          <svg width="100" height="100">
            <rect cx="50" cy="50" stroke-width="4" />
          </svg>
        </Col>
        <Col>
           <svg width="100" height="100">
            <rect cx="50" cy="50" stroke-width="4" />
          </svg>  
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="aboutText">
            <p>Mauris mattis non mi ac gravida. Cras maximus ligula eu lectus cursus, ac malesuada leo feugiat. Quisque lacinia posuere massa, vel sollicitudin sem faucibus ac. Nullam ut neque massa. Etiam aliquam, mi vel venenatis ornare, lorem purus facilisis elit, tincidunt aliquet massa metus ut magna. Phasellus tincidunt, urna eget rhoncus tristique, ante diam bibendum eros, quis dictum metus nulla sit amet massa. Nam tincidunt rutrum ex, et posuere felis pellentesque ac. Aliquam erat volutpat. Etiam sollicitudin orci nec sem rutrum consequat. Sed mattis turpis et felis egestas egestas.</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;