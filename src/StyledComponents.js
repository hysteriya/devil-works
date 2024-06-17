import styled from 'styled-components';

export const HeaderContainer = styled.header`
  text-align: center;
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  position: relative;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    
    .devil {
      color: red;
      text-decoration: underline;
    }
  }
`;

export const JoinButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
`;

export const CoffeeChat = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1rem;
  color: #666;
`;

export const MissionContainer = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #ffffff;

  p {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    
    .fashion {
      font-style: italic;
      color: #ff4500;
    }
  }
`;

export const EmailInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  font-size: 1rem;
`;

export const GetEarlyAccessButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff4500;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;


export const AudienceContainer = styled.section`
  text-align: center;
  padding: 2rem 1rem;
  background-color: #f8f9fa;
`;

export const AudienceTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const AudienceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    background-color: #ff4500;
    color: white;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`;

export const FooterContainer = styled.footer`
  text-align: center;
  background-color: #333;
  color: white;
  padding: 1rem 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

export const PartyButton = styled.button`
  background-color: #ff4500;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
`;