import React,{useState} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import img1 from '../img/team-1.jpg';
import img2 from '../img/team-2.jpg';
import img4 from '../img/team-4.jpg';
import img3 from '../img/team-3.jpg';

function TeamItem({src,name, job}){
    const [showLinks, setShowLinks] = useState(false)
    return(
        <Col md={4} lg={3} className="team-item" 
            onMouseMove={()=>setShowLinks(true)}
            onMouseLeave={()=>setShowLinks(false)}
            >
            <img src={src} className="w-100" alt={name.toUpperCase()}/>
            <div className={`team-info text-center ${showLinks? `active` : ``} `}>
                <h3>{name}</h3>
                <h5>{job}</h5>
            </div>  
            <div className={`on-hover flex-column align-items-start  ${showLinks? `d-flex` : `d-none`}`}>
                <a href="/" style={{animationDuration: "0.6s", backgroundColor: "#3180ff"}} className={`d-flex justify-content-center align-items-center  animate__animated  ${setShowLinks? `animate__slideInLeft` : `` }`}>
                    <i className={`fab fa-facebook `}></i>
                </a>
                <a href="/" style={{animationDuration: "0.8s", backgroundColor: "#66a1ff"}} className={`d-flex justify-content-center align-items-center  animate__animated  ${setShowLinks? `animate__slideInLeft` : `` }`}>
                    <i className={`fab fa-twitter `}></i>
                </a>
                <a href="/" style={{animationDuration: "0.9s", backgroundColor: "#002f7a"}} className={`d-flex justify-content-center align-items-center  animate__animated  ${setShowLinks? `animate__slideInLeft` : `` }`}>
                    <i className={`fab fa-linkedin `}></i>
                </a>
                <a href="/" style={{animationDuration: "1s", backgroundColor: "#19335c"}} className={`d-flex justify-content-center align-items-center  animate__animated  ${setShowLinks? `animate__slideInLeft` : `` }`}>
                    <i className={`fab fa-instagram `}></i>
                </a>
            </div>
        </Col>
    )
}

function TeamItems() {
    return (
        <div className="team-items">
            <Container>
                <Row>
                    <TeamItem
                        src={img1}
                        name="Adam Phillips"
                        job="CEO & Founder"
                    />
                    <TeamItem
                        src={img2}
                        name="Dylan Adams"
                        job="Civil Engineer"
                    />
                    <TeamItem
                        src={img3}
                        name="Jhon Doe"
                        job="Interior Designer"
                    />
                    <TeamItem
                        src={img4}
                        name="Josh Dunn"
                        job="Painter"
                    />
                </Row>
            </Container>
        </div>
    )
}

export default TeamItems;
