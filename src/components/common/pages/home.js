import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle
} from 'reactstrap';
import Logo from '../../../images/burgerHP.jpg';

function Home() {
    return (
        <Container className="hContainer">
            <Row>
                <Col>
                    <h2>Brisbane's most disgusting burgers... in a good way</h2>
                </Col>
            </Row>
            <hr></hr>
            <Row>
                <Col>
                    <div>
                        <Card>
                            <CardImg top width="100%" height="" src={Logo} alt="Delicious burger"/>
                            <CardBody>
                                <CardTitle tag="h5">Something about burgers</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Probably more stuff about this food</CardSubtitle>
                                <CardText></CardText>
                            </CardBody>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="homeP">
                        <Row>
                            <Col>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In posuere lorem non ex
                                fermentum, nec laoreet quam lobortis. Donec sodales dui vitae ipsum blandit
                                tempus. Praesent gravida odio et mi placerat, id varius massa luctus. Cras
                                sagittis mattis ipsum nec fermentum. Etiam maximus tortor a auctor tincidunt.
                                Nunc maximus mauris vitae odio bibendum, quis volutpat quam egestas.
                                Pellentesque lacinia sapien turpis, vel dictum velit eleifend vitae. Vivamus
                                mattis ante quis cursus pulvinar.</Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <hr></hr>
        </Container>

    )
}

export default Home;