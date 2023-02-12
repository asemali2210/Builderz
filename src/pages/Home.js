import React from 'react';
import Topbar from '../components/Topbar';
import HomeCarsoul from '../components/HomeCarsoul';
import Features from '../components/Features';
import AboutCom from '../components/AboutCom';
import CountersCom from '../components/CountersCom';
import ServiceCom from '../components/ServiceCom';
import Video from '../components/Video';
import TeamCom from '../components/TeamCom';
import AccordionCom from '../components/AccordionCom';
import Testimonials from '../components/Testimonials';
import LatestBlog from '../components/LatestBlog';
import FooterCom from '../components/FooterCom';

function Home() { 
    return (
        <div className="home">
            <Topbar />
            <HomeCarsoul />
            <Features  />
            <AboutCom />    
            <CountersCom />
            <ServiceCom />
            <Video />
            <TeamCom />
            <AccordionCom />
            <Testimonials />
            <LatestBlog />
            <FooterCom />
        </div>
    )
}

export default Home;
