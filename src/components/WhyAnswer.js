import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
  height: 320px;
  background: #F7F2E8 0% 0% no-repeat padding-box;
  .content {
    padding-top: 47px;
    padding-left: 10%;
    padding-right: 10%;
    .h2 {
      font-size: 24px;
      line-height: 60px;
      color: #393B40;
      text-transform: capitalize;
      margin-bottom: 8px;
      letter-spacing: 0px;
    }
    .p {
      color: #707070;
      font-size: 24px;
      line-height: 35px;
      letter-spacing: 0px;
    }
  }
`
const WhyAnswer = ({content}) => {
  return (  
    <FooterContainer>
      <div className="content">
        <h2>Why do you need to answer this?</h2>
        <p>{content}</p>
      </div>
    </FooterContainer>
  );
}

export default WhyAnswer;