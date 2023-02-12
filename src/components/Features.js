import React from 'react';
import {Col,Container,Row} from 'react-bootstrap';

function Feature({title,icon,content, dark,yl}){
    return (
        /* if the compontent have props dark >> background dark  else light yellow*/
        <div className={`feature  d-flex align-items-center justify-content-center ${dark && `bg-dm` } ${yl && `bg-yl`}`} >
            <div className="d-flex align-items-center justify-content-center">
                <i className={`feature-icon fa fa-${icon} ` }></i>
            </div>
            <div className="content">
                <h4>{title}</h4>
                <p>{content}</p>
            </div>
        </div>
    )
}
function Features() {
    return (
        <div className="home-features">
            <Container fluid={true}>
                <Row>
                    <Col md={12} lg={4} sm={12}>
                        <Feature 
                            dark
                            title="Expert Worker"
                            content="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non"
                            icon="user"
                            />
                    </Col>
                    <Col md={12} lg={4} sm={12}>
                        <Feature 
                            yl
                            title="Quality Work"
                            content="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non"
                            icon="building"
                            />
                    </Col>
                    <Col md={12} lg={4} sm={12} >
                        <Feature 
                            dark
                            title="24/7 Support"
                            content="Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non"
                            icon="headset"
                            />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Features;
