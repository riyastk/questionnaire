import React, { useState } from 'react'
import styled from 'styled-components'

const NumberInput = styled.div`
  display: flex;
  div {
  margin: 0 67px;
  font-size: 32px;
  line-height: 48px;
  font-weight: 600;
  }
`
const Button = styled.button`
  width: 44px;
  height: 44px;
  border: 1px solid #707070;
  border-radius: 16px;
  outline: none;
  background-color: ${props => props.isSelected ? '#F7F2E8' : '#FFFFFF'}
`

const NumericInput = ({question, onAnswerSelected, answer}) => {
  const [value, setValue] = useState(answer || 0)
  const [ selected, setSelected ] = useState(null)

  const updateValue = (val) => {
    let newValue = value + val
    setSelected( val === -1 ? '+' : '-' )
    if(newValue >= 0){ 
      setValue(newValue)
      onAnswerSelected(newValue)
    }
  }
  return ( 
    <NumberInput>
      <Button onClick={() => updateValue(-1)} isSelected={selected === '+'}> - </Button>
      <div>{value}</div>
      <Button onClick={() => updateValue(1)} isSelected={selected === '-'}> + </Button>
    </NumberInput>
  );
}

export default NumericInput