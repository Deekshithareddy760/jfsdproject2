import React from 'react';
import styled from 'styled-components';

const AboutUs = () => {
  return (
    <StyledContainer>
      <StyledTitle>About Us</StyledTitle>
      <StyledContent>
        <p>
          At <strong>KISAN AASTHA</strong>, we are committed to empowering farmers with the knowledge and guidance they need to improve their farming practices and livelihoods. Our platform connects farmers directly with agricultural experts, enabling real-time access to personalized advice and support for a variety of farming challenges.
        </p>
        <p>
          We understand that farming is not just a profession, but a way of life. However, in today’s rapidly evolving agricultural landscape, farmers face numerous obstacles, from unpredictable weather patterns to new diseases and market fluctuations. <strong>KISAN AASTHA</strong> bridges the gap between expert knowledge and farmers' real-world needs, ensuring they get the right guidance at the right time.
        </p>
      </StyledContent>
    </StyledContainer>
  );
};

export default AboutUs;

// Styled Components for styling
const StyledContainer = styled.div`
  padding: 20px; /* Add some padding */
  max-width: 800px; /* Limit width for better readability */
  margin: 0 auto; /* Center the content */
  text-align: left; /* Align text to the left */
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #252525; /* Title color */
  margin-bottom: 20px; /* Space below the title */
`;

const StyledContent = styled.div`
  font-size: 1.2rem; /* Content font size */
  color: #555; /* Content color */
  line-height: 1.6; /* Line height for readability */
`;
