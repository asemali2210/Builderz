import React,{useState,useRef} from 'react';
import {Col ,Row, Container, Modal, Carousel} from 'react-bootstrap';
import Project from './Project';

function ServiceCom() {

    /* set  number of project components  */

    const [posts, setPosts] = useState([])
    for(let i = 1 ; i <=  6 ; i++){
        posts.push(
            <Project 
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            id={i}
            />
        )
    }
    return (
        <div className="service">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="sercive-heading text-center">
                            <p className="h3">Our Services</p>
                            <p className="h2">We Provide Services</p>
                        </div>
                    </Col>
                    <Col md={12}>
                        <Row>{posts}</Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceCom
