import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
  width: 317px;
  height: 159px;
  border: 1px solid #707070;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.isSelected ? '#F7F2E8' : null};
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #707070;
  font-weight: bold;
  text-transform: capitalize;
  text-align: center;

`

const TextBox = ({content, handleClick, isSelected}) => {
  return (  
    <Wrapper onClick={() => handleClick()} isSelected={isSelected}>
      {content}
    </Wrapper>
  );
}
 
export default TextBox;