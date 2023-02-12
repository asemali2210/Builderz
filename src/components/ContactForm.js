import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

function ContactForm() {
    return (
        <div className="contact-form">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="contact-form-heading text-center" >
                            <p className="h3">Get In Touch</p>
                            <p className="h2">For Any Query</p>
                        </div>
                    </Col>
                    <Col md={12} className="get-in-touch">
                        <Row>
                            <Col md={6} >
                                <div className="details bg-dm">
                                    <Row>
                                        <Col md={12}>
                                            <div className="data-col d-flex align-items-center">
                                                <i className="fa fa-compass"></i>
                                                <div className="data-heading">
                                                    <h4>Location</h4>
                                                    <h5>123 Street, New York, USA</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="data-col d-flex align-items-center">
                                                <i className="fa fa-mobile"></i>
                                                <div className="data-heading">
                                                    <h4>Phone</h4>
                                                    <h5>+012 345 67890</h5>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className="data-col d-flex align-items-center">
                                                <i className="fa fa-envelope-open"></i>
                                                <div className="data-heading">
                                                    <h4>Email</h4>
                                                    <h5>info@example.com</h5>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col md={6}>
                                <form className="form-controler bg-yl">
                                    <Row className="justify-content-center ">
                                        <Col  md={10}>
                                            <input className="input-form" type="text" placeholder="Your Name" for="name" />
                                        </Col>
                                        <Col  md={10}>
                                            <input className="input-form" type="email" placeholder="Your Email" for="email"/>
                                        </Col>
                                        <Col  md={10}>
                                            <input className="input-form" type="text" placeholder="Subject" for="subject"/>
                                        </Col>
                                        <Col  md={10}>
                                            <textarea col="150" row="5" placeholder="Message"/>
                                        </Col>
                                        <Col  md={10}>
                                            <button className="btn form-btn" >Send Message</button>
                                        </Col>
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactForm;
