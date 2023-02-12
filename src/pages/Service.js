import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import ServiceCom from '../components/ServiceCom';
import AccordionCom from '../components/AccordionCom';
import FooterCom from '../components/FooterCom';
function Service() {
    return (
        <div className="main-service">
            <Topbar />
            <Header />
            <ServiceCom />
            <AccordionCom />
            <FooterCom />
        </div>
    )
}

export default Service;
