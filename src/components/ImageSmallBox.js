import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  width: 50px;
`
const Wrapper = styled.div`
  width: 122px;
  height: 122px;
  border: 1px solid #eba600;
  border-radius: 16px;
  background-color: ${props => props.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  span {
    position: absolute;
    right: 0;
    top: 0;
    color: #fff;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    text-align: center;
    line-height: 22px;
    background: #EBA600 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029; 
  }
`
const ImageSmallBox = ({icon, backgroundColor, handleClick, isSelected}) => {
  return (
    <Wrapper onClick={() => handleClick()} backgroundColor={backgroundColor}>
      { isSelected && <span>✓</span> }
      <Image src={icon}/>
    </Wrapper>
  );
}

export default ImageSmallBox