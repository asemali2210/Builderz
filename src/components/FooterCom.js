import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
function Footer() {
    return (
        <div className="main-footer bg-dm">
            <Container>
            <Row>
                <Col md={6} lg={3} className="footer-col">
                    <h3 className="list-name">Office Contact</h3>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-map-marker-alt"></i>
                        <h4>123 Street, New York, USA</h4>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-phone"></i>
                        <h4>+012 345 67890</h4>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-envelope"></i>
                        <h4>info@example.com</h4>
                    </div>
                    <div className="d-flex align-items-center social-links">
                        <a href="/">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                </Col>
                <Col md={6}  lg={3}className="footer-col">
                    <h3 className="list-name">Services Areas</h3>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Services Areas</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Building Construction</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">House Renovation</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Architecture Design</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Painting</a>
                    </div>
                </Col>
                <Col md={6} lg={3} className="footer-col">
                    <h3 className="list-name">Services Areas</h3>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">About Us</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Contact Us</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Projects</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Architecture Design</a>
                    </div>
                    <div className="footer-item d-flex align-items-center">
                        <i className="fa fa-chevron-right"></i>
                        <a href="/">Testimonial</a>
                    </div>
                </Col>
                <Col md={6} lg={3} className="footer-col">
                    <h3 className="list-name">Newsletter</h3>
                    <div className="footer-item ">
                        <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                        <div className="d-flex">
                        <input type="Email" className="footer-input" placeholder="Email Here"/>
                        <button className="btn">Submit</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <Row className="align-items-center justify-content-center footer-center">
                <a href="/">Terms of use </a>
                <a href="/">Privacy policy</a>
                <a href="/">policy</a>
                <a href="/">Cookies</a>
                <a href="/">Help</a>
                <a href="/">FQAs</a>
            </Row>
            <hr/>
                <Row className="align-items-center justify-content-between footer-bottom">
                <Col md={6}>
                    <p className="text-lg-left text-center">
                    © 
                    <a href="/">Your Site Name</a>
                    , All Right Reserved.
                    </p>
                </Col>
                <Col md={6} >
                    <p className="text-lg-right text-center">
                            Designed By 
                        <a href="https://htmlcodex.com/"> HTML Codex </a>  
                            Was rebuilt By
                        <a href="https://github.com/asemali2210"> Asem Ali </a> 
                    </p>
                </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;
