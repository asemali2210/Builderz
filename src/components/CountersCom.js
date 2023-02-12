import React,{useEffect,useState} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Container, Row} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

function CountersCom() {
    function Fact({title,icon, counter}){

        /* check every scroll down */
        const [startCounter, setStartCounter] = useState(false)
        useEffect(() => {
            const counteRef = document.querySelector(".home-counter");
            function handleScroll(){
                if(window.scrollY >= counteRef.offsetTop - 500 ){
                    setStartCounter(true)
                } else {
                    setStartCounter(false)
                }
            }
            window.addEventListener('scroll', handleScroll)
            /* CLEAN UP */
            return () =>  window.removeEventListener('scroll', handleScroll)
        })
        const { number } = useSpring({
            reset: true,
            from: { number: 0 },
            number: parseInt(counter),
            delay: 200,
            config:{duration: 5000}
        })
        return (
            <div className="fact d-flex align-items-center justify-content-center">
                <div >
                    <i className={`fa fa-${icon} icon` } ></i>
                </div>
                {/* ✨✨✨✨✨✨✨animte on scroll ✨✨✨✨✨✨✨ */}
                <div className="fact-content">
                    {/* check scroll and render */}
                    {startCounter? (
                        <>
                            <animated.p className="h4 counter">
                                {number.to(n => n.toFixed(0))}
                            </animated.p>
                        </>
                    ) : null}
                    <p className="h4">{title}</p>
                </div>
            </div>
        )
    }
    return (
        <div className="home-counter">
            <Container fluid={true}>
                <Row className="align-items-center">
                {/* ✨✨✨✨✨✨✨animte on scroll  left div ✨✨✨✨✨✨✨ */}
                    <ScrollAnimation animateIn="animate__slideInLeft"  className="col-md-12 col-lg-6" animateOnce>
                        <div className="left d-flex bg-dm align-items-center justify-content-around">
                            <Fact 
                                title="EXPERT WORKERS"
                                icon="user"
                                counter="187"
                            />
                            <Fact 
                                title="HAPPY CLIENTS"
                                icon="building"
                                counter="468"
                            />
                        </div>
                    </ScrollAnimation>
                    {/* ✨✨✨✨✨✨✨animte on scroll right div ✨✨✨✨✨✨✨ */}
                    <ScrollAnimation animateIn="animate__slideInRight"  className="col-md-12 col-lg-6" animateOnce>
                        <div className="left d-flex bg-yl align-items-center justify-content-between">
                            <Fact 
                                title="EXPERT WORKERS"
                                icon="warehouse"
                                counter="578s"
                            />
                            <Fact 
                                title="RUNNING PROJECTS"
                                icon="box"
                                counter="458"
                            />
                        </div>
                    </ScrollAnimation>
                </Row>
            </Container>
        </div>
    )
}

export default CountersCom;
