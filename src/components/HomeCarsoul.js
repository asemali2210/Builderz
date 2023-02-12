import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slideImg1 from '../img/carousel-1.jpg';
import slideImg2 from '../img/carousel-2.jpg';
import slideImg3 from '../img/carousel-3.jpg';
import FromRight from './animation/FromRight';
import FromLeft from './animation/FromLeft';
import FromBot from './animation/FromBot';

function HomeCarsoul() {
    const [index, setIndex] = useState(0)
    /* 🧷🧷🧷🧷🧷 handle slider index active  🧷🧷🧷🧷🧷 */
    const handleSelect = (i, e) => {
        setIndex(i)
    }
    return (
        <div className="home-carsoul">
            <Carousel activeIndex={index} onSelect={handleSelect} interval={4000}>
                <Carousel.Item>
                    <div className="img-overlay">
                        <div className="overlay"></div>
                        <img
                            className="d-block w-100"
                            src={slideImg1}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center d-none">
                        {/*  ⚓⚓⚓⚓⚓⚓⚓check index and then run ⚓⚓⚓⚓⚓⚓⚓  */}
                        {index === 0 ? <>
                            <FromLeft>
                                <p>For Your Dream Home</p>
                            </FromLeft>
                            <FromRight>
                                <h3 >We Are Trusted</h3>
                            </FromRight>
                            <FromBot>
                                <button className="btn bt-bg-yl">
                                    Get A Qoute
                                </button>
                            </FromBot>
                        </> : null}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-overlay">
                        <div className="overlay"></div>
                        <img
                            className="d-block w-100"
                            src={slideImg2}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*  ⚓⚓⚓⚓⚓⚓⚓check index and then run ⚓⚓⚓⚓⚓⚓⚓  */}
                        {index === 1 ? <>
                            <FromLeft>
                                <p>Professional Builder</p>
                            </FromLeft>
                            <FromRight>
                                <h3 >We Build Your Home</h3>
                            </FromRight>
                            <FromBot>
                                <button className="btn bt-bg-yl">
                                    Get A Qoute
                                </button>
                            </FromBot>
                        </> : null}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="img-overlay">
                        <div className="overlay"></div>
                        <img
                            className="d-block w-100"
                            src={slideImg3}
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        {/*  ⚓⚓⚓⚓⚓⚓⚓check index and then run ⚓⚓⚓⚓⚓⚓⚓  */}
                        {index === 2 ? <>
                            <FromLeft>
                                <p>For Your Dream Project</p>
                            </FromLeft>
                            <FromRight>
                                <h3 >We Are Professional</h3>
                            </FromRight>
                            <FromBot>
                                <button className="btn bt-bg-yl">
                                    Get A Qoute
                                </button>
                            </FromBot>
                        </> : null}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarsoul;
