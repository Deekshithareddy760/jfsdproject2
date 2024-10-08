import React from 'react';
import styled from 'styled-components';

const ContactUs = () => {
  return (
    <StyledContainer>
      <StyledTitle>Contact Us</StyledTitle>
      <StyledContent>
        <p>
          We would love to hear from you! Whether you have questions about our services, need assistance, or have feedback to share, our team is here to help.
        </p>
        <p>
          You can reach us through the following channels:
        </p>
        <StyledList>
          <li>
            <strong>Email: </strong>team@kisanaastha.com
          </li>
          <li>
            <strong>Phone: </strong>9100279274 
          </li>
          <li>
            <strong>Office Address:</strong> vijayawada, India
          </li>
        </StyledList>
        <p>
          Alternatively, you can fill out the contact form below, and we will get back to you as soon as possible:
        </p>
        <StyledForm>
          <StyledInput type="text" placeholder="Your Name" required />
          <StyledInput type="email" placeholder="Your Email" required />
          <StyledTextarea placeholder="Your Message" required />
          <StyledButton type="submit">Send Message</StyledButton>
        </StyledForm>
      </StyledContent>
    </StyledContainer>
  );
};

export default ContactUs;

// Styled Components for styling
const StyledContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #252525;
  margin-bottom: 20px;
`;

const StyledContent = styled.div`
  font-size: 1.2rem;
  color: #555;
  line-height: 1.6;
`;

const StyledList = styled.ul`
  list-style-type: none; /* Remove bullet points */
  padding: 0;
  margin: 20px 0; /* Space around the list */
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column; /* Stack form elements */
  gap: 10px; /* Space between elements */
  margin-top: 20px; /* Space above the form */
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none; /* Disable resizing */
`;

const StyledButton = styled.button`
  padding: 10px;
  background-color: #4caf50; /* Green background */
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #45a049; /* Darker green on hover */
  }
`;
