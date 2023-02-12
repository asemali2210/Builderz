import React from 'react';
import {Col,Container,Row} from 'react-bootstrap';
import img from '../img/about.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function AboutCom() {
    return (
        /* ✨✨✨✨✨✨✨animte on scroll  slide up✨✨✨✨✨✨✨ */
        <ScrollAnimation animateIn="animate__slideInUp" duration={2} animateOnce>
            <div className="about">
                <Container>
                    <Row className="align-items-center">
                        <Col md={12} lg={6} className="about-img">
                            <img src={img} className="img-fluid about-img" alt="about-us" />
                        </Col>
                        <Col md={12} lg={6}>
                            <div className="content text-center text-lg-left">
                                <p className="h4">Welcome to Builderz</p>
                                <p className="h1" >25 Years Experience</p>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.</p>
                                <button className="btn bg-yl bt-bg-dm">Learn More</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </ScrollAnimation>
    )
}

export default AboutCom;
