import React from 'react'

import TextImageBox from './TextImageBox'
import TextBox from './TextBox'
import ImageSmallBox from './ImageSmallBox'
import styled from "styled-components";

const TextImage = styled.div`
  display: grid;
  grid-template-columns: ${props => props.rowSize ?  'repeat('+props.rowSize+', 1fr);' : 'repeat(4, 1fr);'}
  grid-column-gap: 16px;
  grid-row-gap: 32px  ;
  width: fit-content;
`

const ImageSmall = styled.div`
  display: grid;
  grid-template-columns: ${props => props.rowSize ?  'repeat('+props.rowSize+', 1fr);' : 'repeat(6, 1fr);'}
  grid-column-gap: 24px;
  grid-row-gap: 16px  ;
  width: fit-content;
  .label {
    max-width: 120px;
    word-break: break-word;
    font-size: 16px;
    line-height: 25px;
    color: #EBA600;
    margin-top: 16px;
  }
`
const TextBoxInput = styled.div`
  display: grid;
  grid-template-columns: ${props => props.rowSize ?  'repeat('+props.rowSize+', 1fr);' : 'repeat(3, 1fr);'}
  grid-column-gap: 32px;
  grid-row-gap: 32px  ;
  width: fit-content;
`

const SingleInput = ({question, onAnswerSelected, answer}) => {

  const handleClick = (value) => {
    onAnswerSelected(value)
  }

  const handleAnswerType = () => {
    switch (question.answer_type) {
      case 'text_image':
        return (
            <TextImage rowSize={question.row_size}>
              {
                question.answers.map( option => {
                  return (
                      <div key={option.server_value}>
                        <TextImageBox icon={option.url} label={option.answer} isSelected={answer === option.server_value} handleClick={() => handleClick(option.server_value)}/>
                      </div>
                  )
                })
              }
            </TextImage>
        )
      case 'image_small':
        return (
            <ImageSmall rowSize={question.row_size}>
              {
                question.answers.map( option => {
                  return (
                      <div key={option.server_value}>
                        <ImageSmallBox icon={option.url} backgroundColor={option.color_code} isSelected={answer === option.server_value} handleClick={() => handleClick(option.server_value)}/>
                        <div className={'label'}>{option.ga_event_label}</div>
                      </div>
                  )
                })
              }
            </ImageSmall>
        )
      case 'text':
        return (
            <TextBoxInput rowSize={question.row_size}>
              {
                question.answers.map( option => {
                  return (
                      <div key={option.server_value}>
                        <TextBox content={option.answer} isSelected={answer === option.server_value} handleClick={() => handleClick(option.server_value)}/>
                      </div>
                  )
                })
              }
            </TextBoxInput>
        )
      default:
        break;
    }
  }

  return (
      <div>
        {
          handleAnswerType()
        }
      </div>
  )
}

export default SingleInput;