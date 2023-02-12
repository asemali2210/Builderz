import React from 'react';
import TeamItems from '../components/TeamItems';

function TeamCom() {
    return (
            <div className="team">
                        <div className="team-heading text-center">
                <h5>Our Team</h5>
                <h4>Meet Our Engineer</h4>
            </div>
            <TeamItems/>
            <TeamItems/>
        </div>
    )
}

export default TeamCom
