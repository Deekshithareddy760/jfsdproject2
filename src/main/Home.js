import React from 'react';
import { Container, Grid } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';
import image1 from '../main/image1.jpg'; // Adjust the path as needed

// Global style for body background specific to Home component
const GlobalStyle = createGlobalStyle`
  body {
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh; /* Ensures the background covers the full height */
  }
`;

const Home = () => {
    return (
        <>
            <GlobalStyle image={image1} /> {/* Pass image as prop */}
            <StyledContainer>
                <Grid container spacing={0}>
                    <Grid item xs={12} md={6}>
                        <TextOverlay>
                            <h1>KISAN AASTHA</h1>
                        </TextOverlay>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <StyledPaper elevation={3}></StyledPaper>
                    </Grid>
                </Grid>
            </StyledContainer>
        </>
    );
};

export default Home;

// Styling
const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Optional: Add a shadow for better visibility */
  text-align: center;
  z-index: 2; /* Ensure the text appears above the image */
`;
