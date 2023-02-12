import React, {useRef, useState} from 'react';
import {Col  , Modal,Carousel} from 'react-bootstrap';
import img1 from '../img/portfolio-1.jpg';
import img2 from '../img/portfolio-2.jpg';
import img3 from '../img/portfolio-3.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

function Moadal(props, img){
    const CarouselRef = useRef();
    const [index , setIndex ] = useState(0);
    const handleSelect = (i) => {
        setIndex(i);
    }
    return (
            <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="home-custom-modal-bs"
            >
                <Carousel  ref={CarouselRef} indicators={true} activeIndex={index} onSelect={handleSelect} slide={false}>
                    <Carousel.Item className="">
                        <img
                        className="d-block carousel-img"
                        src={img1}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="">
                        <img
                        className="d-block carousel-img"
                        src={img2}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="">
                        <img
                        className="d-block carousel-img"
                        src={img3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="modal-control d-flex align-items-center justify-content-between">
                    <p className="h6">{`Image ${index+1} of 3`}</p>
                    <button className="btn" onClick={props.onHide}>
                        <i className="fa fa-times"></i>
                    </button>
                </div>
            </Modal>
        );
}

function Project({ img, content}){
    const [modalShow, setModalShow] = useState(false);
    const project = useRef();
    const projectContent = useRef();
    const showText = () => {
        projectContent.current.classList.replace("d-none","d-block")
    }
    const hideText = () => {
        projectContent.current.classList.replace("d-block","d-none")
    }
    return (
        <Col md={6} lg={4}>
            <ScrollAnimation animateIn="animate__slideInUp" animateOnce>
            <div  className="main-project"
                    ref={project}
                    /* show content of project */
                    onMouseMove={showText}
                    onMouseLeave={hideText}
                >
                <img src={img1} alt="Project Name" />
                <div className="content-on-hover d-none" ref={projectContent}>
                    {content}
                </div>
                <div className="project-name bg-dm d-flex justify-content-between align-items-center">
                    <h4>Lorem ipsum dolor</h4>
                    <button className="btn bg-yl" onClick={() => setModalShow(true)}>
                        <i className="fa fa-plus"></i>
                    </button>   
                    <Moadal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                        img={img}
                    />
                </div>
            </div>
            </ScrollAnimation>
        </Col>

    )
}

export default Project;
