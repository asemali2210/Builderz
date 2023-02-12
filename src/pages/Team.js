import React from 'react';
import Topbar from '../components/Topbar';
import Header from '../components/Header';
import TeamICom from '../components/TeamCom';
import FooterCom from '../components/FooterCom';

function Team() {
    return (
        <div className="main-team">
            <Topbar />
            <Header />
            <TeamICom/>
            <FooterCom />
        </div>
    )
}

export default Team;
