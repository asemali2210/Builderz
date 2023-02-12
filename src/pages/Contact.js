import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import ContactForm from '../components/ContactForm';
import FooterCom from '../components/FooterCom';

function Contact() {
    return (
        <div className="page-contact">
            <Topbar />
            <Header />
            <ContactForm/>
            <FooterCom />
        </div>
    )
}

export default Contact;
