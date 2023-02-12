import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import  Slider from "react-slick";
import img1 from '../img/testimonial-1.jpg'
import img2 from '../img/testimonial-2.jpg'
import img3 from '../img/testimonial-3.jpg'
import img4 from '../img/testimonial-4.jpg'
function Testimonials() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        centerPadding: "0px",
    };
    return (
        <div className="home-testimonials ">
            <div className="overlay"></div>
            <Container  style={{height: "100%"}}>
                <Row  style={{height: "100%"}} className="align-items-center justify-content-center">
                    <Col md={12}>
                        <Slider {...settings} className="home-custom-slick">
                            <div className="testimonial-item d-flex align-items-center justify-content-center flex-column">
                                <img alt="img" src={img1} />
                                <i className="fa fa-quote-left"></i>
                                <h5 className="name"> Customer Name </h5>
                                <p className="col-md-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                
                            </div>
                            <div className="testimonial-item d-flex align-items-center justify-content-center flex-column">
                                <img alt="img" src={img2} />
                                <i className="fa fa-quote-left"></i>
                                <h5 className="name"> Customer Name </h5>
                                <p className="col-md-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                
                            </div>
                            <div className="testimonial-item d-flex align-items-center justify-content-center flex-column">
                                <img alt="img" src={img3} />
                                <i className="fa fa-quote-left"></i>
                                <h5 className="name"> Customer Name </h5>
                                <p className="col-md-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                
                            </div>
                            <div className="testimonial-item d-flex align-items-center justify-content-center flex-column">
                                <img alt="img" src={img4} />
                                <i className="fa fa-quote-left"></i>
                                <h5 className="name"> Customer Name </h5>
                                <p className="col-md-8 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus.</p>
                                
                            </div>
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Testimonials
