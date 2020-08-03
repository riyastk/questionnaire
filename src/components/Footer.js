import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  background: #F7F2E8 0 0 no-repeat padding-box;
  text-align: center;
  padding: 80px;
  box-sizing: border-box;
  height: 320px;
  p {
    font-size: 24px;
    font-weight: 400;
    letter-spacing: 0;
    color: #707070;
    margin-bottom: 24px;
  }
`
const Button = styled.button`
  width: 320px;
  height: 73px;
  background: #E6E6E6 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px #00000029;
  border-radius: 16px;
  padding: 20px;
  border: none;
  text-align: center;
  letter-spacing: 0;
  color: #707070;
  font-size: 24px;
  font-weight: 500;
  text-transform: capitalize;
  outline: none;
`

const Footer = () => {
  const gotoFeedback = () => {
    console.log('feedback button pressed')
  }
  return ( 
    <FooterContainer>
      <p>
        Thanks for taking the time with us.
        <br/>Please give us your feedback to improve!
      </p>
      <Button onClick={() => gotoFeedback()}>Give Us Feedack</Button>
    </FooterContainer>
  );
}

export default Footer;