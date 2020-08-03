import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
  max-width: 40px;
  max-height: 40px;
`
const Wrapper = styled.div`
  width: 260px;
  height: 159px;
  border: 1px solid #707070;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
  }
  background-color: ${props => props.isSelected?'#F7F2E8':null}
`

const TextImageBox = ({icon, label, handleClick, isSelected}) => {
  return (
    <Wrapper onClick={() => handleClick()} isSelected={isSelected}>
      <div>
        <Image src={icon}/>
        <div>{label}</div>
      </div>
    </Wrapper>
  );
}

export default TextImageBox