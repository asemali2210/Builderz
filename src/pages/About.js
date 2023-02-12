import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import AboutCom from '../components/AboutCom';
import CountersCom from '../components/CountersCom';
import AccordionCom from '../components/AccordionCom';
import FooterCom from '../components/FooterCom';

function About() {
    return (
        <div className="main-about">
            <Topbar />
            <Header />
            <AboutCom />
            <CountersCom />
            <AccordionCom />
            <FooterCom />
        </div>
    )
}

export default About;
