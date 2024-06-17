import React from 'react';
import { MissionContainer, GetEarlyAccessButton, EmailInput } from './StyledComponents';

const Mission = () => {
  return (
    <MissionContainer>
      <p>
        We are on a mission to build world’s first professional network for <span className="fashion">Fashion</span> - So you can level up your career presence,
        connect & engage with fellow fashionmongers and access collab, jobs & internship opportunities.
      </p>
      <div>
        <EmailInput type="email" placeholder="Email address" />
        <GetEarlyAccessButton>Get early access</GetEarlyAccessButton>
      </div>
    </MissionContainer>
  );
}

export default Mission;
