import React from 'react';
import { useSpring, animated } from 'react-spring';

function FromBot(props) {
    const style = useSpring({
        from: {
            opacity: 0,
            bottom: -150
        },
        to:{
            opacity: 1,
            bottom:0
        },
        reset: true,
        delay: 200,
        config: {
            duration:1000
        }
    })
    return (    
        <animated.div style={style} className="position-relative">
            {props.children}
        </animated.div >
    )
}

export default  FromBot;
