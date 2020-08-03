import React from 'react'
import styled from 'styled-components'
import NumericInput from './NumericInput'
import RatingInput from './RatingInput'
import SingleInput from './SingleInput'

const QuestionCount = styled.div`
  font-size: 24px;
  line-height: 60px;
  letter-spacing: 0px;
  color: #393B40; 
`
const Question = styled.div`
  font-size: ${props => props.hasHint?'22px':'44px'};
  line-height: ${props => props.hasHint?'44px':'60px'};
  letter-spacing: 0px;
  color: ${props => props.hasHint?'#ddddd':'#393B40'};
  margin-bottom: ${props => props.hasHint?null:'109px'}; 
  `
  const QuestionHint = styled.div`
  font-size: 33px;
  line-height: 44px;
  letter-spacing: 0px;
  color: #393B40;
  margin: 0;
  margin-bottom: 59px;
`


const Quiz = ({question, answer, onAnswerSelected, totalQuestions}) => {

  const renderQuestionType = question => {
    switch (question.question_type) {
      case 'single':
        return <SingleInput question={question} onAnswerSelected={onAnswerSelected} answer={answer}/>
      case 'rating':
        return <RatingInput question={question} onAnswerSelected={onAnswerSelected} answer={answer}/>
      case 'numeric':
        return <NumericInput question={question} onAnswerSelected={onAnswerSelected} answer={answer}/>
      default:
        break;
    }
  }
  

  return (  
    <div>
      <QuestionCount>
        {question.id + '/' + totalQuestions}
      </QuestionCount>
      <Question hasHint={question.question_hint && question.question_hint.length ? true : false}>{question.question}</Question>
      {
        question.question_hint &&
        <QuestionHint>{question.question_hint}</QuestionHint>
      }
      {
        renderQuestionType(question)
      }
    </div>
  );
}

export default Quiz;