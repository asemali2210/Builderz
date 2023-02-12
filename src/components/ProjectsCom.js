import React,{useState} from 'react';
import Project from './Project';
import {Col, Row,Container} from 'react-bootstrap';

function ProjectsCom() {
    const [posts, setPosts] = useState([]);

    /* set  number of project components  */
    
    for(let i = 1 ; i <=  3 ; i++){
        posts.push(
            <Project 
            content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            id={i}
            />
        )
    }
    return (
        <div className="page-projects">
            <Container>
                <Row>
                <Col md={12}>
                        <div className="projects-heading text-center">
                            <p className="h3">Our Projects</p>
                            <p className="h2">Visit Our Projects</p>
                        </div>
                    </Col>
                    {posts}
                </Row>
            </Container>
        </div>
    )
}

export default ProjectsCom;
