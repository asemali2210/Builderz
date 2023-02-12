import React from 'react';
import Nav from'./Nav';
import {Col, Container, Row} from 'react-bootstrap';

function Topbar() {
    return (
        <div className="header-comp bg-yl">
            <div className="top-bar">
            <Container>
                <Row className="align-items-center justify-content-betweens">
                    <Col md={4}>
                        <div className="top-bar-logo">
                            <h2>
                                Builderz
                            </h2>
                        </div>
                    </Col>
                    <Col md={7} className="d-none d-md-block">
                        <Row>
                            <Col className="text-center d-flex align-items-center top-bar-info">
                                <i className="fa fa-calendar-week"></i>
                                <div className="d-flex flex-column">
                                    <strong>Opening Hour</strong>
                                    <small>Mon - Fri, 8:00 - 9:00</small>
                                </div>
                            </Col>
                            <Col className="text-center d-flex align-items-center top-bar-info">
                                <i className="fa fa-phone-volume"></i>
                                <div className="d-flex flex-column">
                                    <strong>Call Us</strong>
                                    <small>+012 345 6789</small>
                                </div>
                            </Col>
                            <Col className="text-center d-flex align-items-center top-bar-info">
                                <i className="fa fa-paper-plane"></i>
                                <div className="d-flex flex-column">
                                    <strong>Email Us</strong>
                                    <small>info@example.com</small>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            </div>
            <Nav />
        </div>
    )
}

export default Topbar;
