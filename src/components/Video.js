import React,{useState} from 'react'
import { useSpring, animated} from 'react-spring';
import {Container,Row} from 'react-bootstrap';
import { Modal} from 'antd';
import YouTube from 'react-youtube';
function Video () {
    /* ✨✨✨✨✨✨✨✨✨animation for btn✨✨✨✨✨✨✨✨✨ */
    const spanAnimated = useSpring({
        loop: true,
        from:{width:100,height:100,opacity:1},
        to:{width:150,height:150,opacity:0},
        config: {duration: 1000}
    })
    /* 🔘🔘🔘🔘🔘🔘🔘and modal setup🔘🔘🔘🔘🔘🔘🔘 */
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
        };
        const handleOk = () => {
        setIsModalVisible(false);
        };
        const handleCancel = () => {
        setIsModalVisible(false);
        };
    const vidOpt = {
        width: "100%",
    }
    return (
        <div className="home-video">
            <Container fluid={true}>
                <Row className="align-items-center justify-content-center">
                    <div className="overlay d-flex align-items-center justify-content-center">
                        <button className="btn bg-yl" onClick={showModal}>
                            <i className="fa fa-play"></i>
                            <animated.span style={spanAnimated}></animated.span>
                        </button>
                    </div>
                    {/* youtube api video */}
                        {isModalVisible? (
                            <>
                            <Modal className="home-custom-ant-modal" title="Video" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                                <YouTube
                            videoId="O-RgquKVTPE"
                            id="VideoId"
                            opts={vidOpt}
                        />
                            </Modal>
                            </>
                        ) : null
                        }
                </Row>
            </Container>
        </div>
    )
}

export default  Video;
