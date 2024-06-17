import React from 'react';
import { AudienceContainer, AudienceTitle, AudienceTags } from './StyledComponents';

const Audience = () => {
  const tags = [
    'Brands', 'Agencies', 'Production & Export Houses', 'Schools & academies', 'Influencers', 
    'Designers', 'Stylists', 'Illustrators & graphic artists', 'Photographers & Filmmakers', 
    'Makeup', 'Models', 'Marketeers', 'Branding', 'Operations & Logistics', 'and other creative professionals...'
  ];

  return (
    <AudienceContainer>
      <AudienceTitle>Who are we building for?</AudienceTitle>
      <AudienceTags>
        {tags.map(tag => <span key={tag}>{tag}</span>)}
      </AudienceTags>
    </AudienceContainer>
  );
}

export default Audience;
