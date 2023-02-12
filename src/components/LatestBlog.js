import React from 'react';
import {Col,Container,Row} from 'react-bootstrap';
import img1 from '../img/blog-1.jpg';
import img2 from '../img/blog-2.jpg';
import img3 from '../img/blog-3.jpg';
function LatestBlog() {
    return (
        <div className="page-latest-blog">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="header text-center">
                            <h5>Latest Blog</h5>
                            <h2>Latest From Our Blog</h2>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="blog">
                            <img alt="img" src={img1} className="w-100"/>
                            <div className="plus bg-dm  d-flex align-items-center justify-content-between">
                                <h4>Lorem ipsum dolor sit</h4>
                                <button className="btn bg-yl">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <div className="content">
                                <h6 className="auth text-center">ByAdmin InConstruction</h6>
                                <p className="text-center">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="blog">
                        <img alt="img" src={img2} className="w-100"/>
                            <div className="plus bg-dm  d-flex align-items-center justify-content-between">
                                <h4>Lorem ipsum dolor sit</h4>
                                <button className="btn bg-yl">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <div className="content">
                                <h6 className="auth text-center">ByAdmin InConstruction</h6>
                                <p className="text-center">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <div className="blog">
                        <img alt="img" src={img3} className="w-100 "/>
                            <div className="plus bg-dm d-flex align-items-center justify-content-between">
                                <h4>Lorem ipsum dolor sit</h4>
                                <button className="btn bg-yl">
                                    <i className="fa fa-plus"></i>
                                </button>
                            </div>
                            <div className="content text-center">
                                <h6 className="auth">ByAdmin InConstruction</h6>
                                <p className="text-center">Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default LatestBlog;
