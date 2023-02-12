import React, {useState} from 'react'
import { Container, Row, Col} from 'react-bootstrap';
function AccordionCom() {

        const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
    `;
    function Panel(){
        const [show, setShow] = useState(false);
        const openClose = () => {
            show? setShow(false) : setShow(true);
        }
        return(
                <div className="panel" onClick={openClose }>
                    <div className={`header d-flex align-items-center justify-content-between ${show? `active` : `` } ` }>
                        <h4 >Lorem ipsum dolor sit amet</h4>
                        <i className={`fa fa-${show?`minus`:`plus`}`}></i>
                    </div>
                    <p className={`text animate__animated ${show? `d-block animate__fadeIn` : `d-none`}`}>{text}</p>
                </div>
        )
    }
    return (
        <div className="page-accodion">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="left">
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="right">
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                            <Panel />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AccordionCom;
