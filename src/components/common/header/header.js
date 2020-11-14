import React from 'react';
import {Container, Row, Col} from 'reactstrap';

function Header() {
    return (
        <Container className="headerContainer">
            <Row>
                <Col>
                    <h1>Ze Burger factory</h1>
                </Col>
            </Row>
        </Container>

    )
}

export default Header;