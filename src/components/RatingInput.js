import React, { useState } from 'react'
import styled from 'styled-components'

const SliderInput = styled.div`
  display: flex;
`

const Slider = styled.div`
  flex: 1;
  max-width: 800px;
  input {
    -webkit-appearance: none;
    width: 100%;
    height: 8px;
    background: #707070 0% 0% no-repeat padding-box;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    &:hover {
      opacity: 1;
    }
    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background: #FFFFFF 0% 0% no-repeat padding-box;
      box-shadow: 0px 3px 6px #00000029;
      border: 1px solid #707070;
      cursor: pointer;
    }
    ::-moz-range-thumb {
      width: 25px;
      height: 25px;
      background: red;
      cursor: pointer;
    }
  }
`

const AnswerHint = styled.div`
  max-width: 170px;
  text-align: center;
`
const Image = styled.img`
  width: 50px;
`
const Hint = styled.div`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #EBA600;
`
const Description = styled.div`
  text-align: left;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0px;
  color: #707070;
`

const RatingInput = ({question, answer, onAnswerSelected}) => {
  
  const [value, setValue] = useState(answer || 0)
  const handleChange = (value) => {
    setValue(value)
    onAnswerSelected(value)
  }
  return (  
    <SliderInput>
      <AnswerHint>
        <Image src={question.left_answer_icon}/>
        <Hint>{question.left_answer_hint}</Hint>
        <Description>{question.left_description}</Description>
      </AnswerHint>
      <Slider>
        <input type="range" min={question.range_min} max={question.range_max} step={1} value={value || 0} onChange={(e) => handleChange(e.target.value)}/>
      </Slider>
      <AnswerHint>
        <Image src={question.right_answer_icon}/>
        <Hint>{question.right_answer_hint}</Hint>
        <Description>{question.right_description}</Description>
      </AnswerHint>
    </SliderInput>
  );
}
 
export default RatingInput;