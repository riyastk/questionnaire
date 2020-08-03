import React, { useState } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import Quiz from '../components/Quiz'
import Result from '../components/Result'
import Footer from '../components/Footer'
import WhyAnswer from '../components/WhyAnswer'
import questionsList from '../questions_list.js'

const CloseButton = styled.button`
  width: 122px;
  height: 50px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  position: fixed;
  top: 53px;
  right: 10%;
`
const TryAgainButton = styled.button`
  color: white;
  font-weight: bold;
  padding: 16px;
  background: #EBA600 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #FFFFFF;
  border-radius: 30px;
  opacity: 1;
  width: 171px;
  height: 50px;
  position: fixed;
  top: 53px;
  right: 140px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
  margin: 50px 16px;
  }
`
const PreviousButton = styled.button`
  width: 260px;
  height: 73px;
  background: #FFFFFF 0 0 no-repeat padding-box;
  box-shadow: 2px 3px 6px #00000029;
  border: 1px solid #EBA800;
  border-radius: 16px;

  color: #707070;
  text-align: left;
  font-size: 24px;
  line-height: 35px;
  padding: 20px 39px;
  letter-spacing: 0px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .img {
    width: 70px;
    height: 70px
  }
`
const NextButton = styled.button`
  outline: none;
  width: 260px;
  height: 73px;
  background: #EBA600 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px #00000029;
  border: none;
  border-radius: 16px;
  color: #FFFFFF;
  text-align: left;
  font-size: 24px;
  line-height: 35px;
  padding: 20px 39px;
  letter-spacing: 0px;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .img {
    width: 70px;
    height: 70px;
  }
`
const QuizContent = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  //max-height: calc(100vh - 170px);
  //overflow: auto;
`

const SubmitButton = styled(NextButton)`
`

const QuestionnairePage = () => {
  const history = useHistory()

  const [ isResult, setIsResult ] = useState(false)
  const [ result, setResult ] = useState({})
  const [ counter, setCounter ] = useState(0)
  const [ question, setQuestion ] = useState(questionsList.questionsList[0])

  const clearQuestionnaire = () => {
    setIsResult(false)
    setResult({})
    setCounter(0)
    setQuestion(questionsList.questionsList[0])
  }
  const handleAnswerSelected = (key, value) => {
    setResult({...result, [key]: value})
  }
  const setNextQuestion = () => {
    const newQuestion = questionsList.questionsList[counter + 1]
    setQuestion(newQuestion)
    setCounter(counter + 1)
    window.scrollTo(0, 0);
  }
  const setPreviousQuestion = () => {
    const newQuestion = questionsList.questionsList[counter - 1]
    setQuestion(newQuestion)
    setCounter(counter - 1)
    window.scrollTo(0, 0);
  }
  const submitQuestionnaire = () => {
    setIsResult(true)
  }
  const isRequired = () => {
    if(question.mandatory && result[question['server_key']]) {
      return true
    }else if(!question.mandatory){
      return true
    }else{
      return false
    }
  }

  const renderResult = () => {
    return (
      <Result result={result}/>
    )
  }
  const renderQuiz = () => {
    return (
      <Quiz 
        answer={result[question['server_key']]}
        question={question}
        onAnswerSelected={(value) => handleAnswerSelected(question['server_key'], value)}
        totalQuestions={questionsList.total_questions}
      />
    )
  }

  return (
    <div>

      {
        isResult ?
          <TryAgainButton onClick={() => clearQuestionnaire()}>
            Try Again
          </TryAgainButton>
        :
          <CloseButton onClick={() => history.push('/')}>
            X
          </CloseButton>
      }
      <QuizContent>
        {
          isResult ? renderResult() : renderQuiz()
        }
        {
          !isResult &&
          <ButtonContainer>
            {
              counter > 0 &&
              <PreviousButton onClick={() => setPreviousQuestion()}>
                <img alt="" src={require("../assets/arrow_left.svg")}/>
                <span>{questionsList.previous_text}</span>
              </PreviousButton>
            }
            {
              (counter < (questionsList.total_questions - 1))
                  ? <NextButton onClick={() => setNextQuestion()} disabled={!isRequired()}>
                    <span>{questionsList.next_text}</span>
                    <img alt="" src={require("../assets/arrow_right.svg")}/>
                  </NextButton>
                  : <SubmitButton onClick={() => submitQuestionnaire()} disabled={!isRequired()}>
                    <span>{questionsList.submit_button}</span>
                    <img alt="" src={require("../assets/arrow_right.svg")}/>
                  </SubmitButton>
            }
          </ButtonContainer>
        }
      </QuizContent>
      {
        !isResult 
        ? <WhyAnswer content={question.why_answer}/>
        : <Footer/>
      }
      
    </div>  
  );
}

export default QuestionnairePage;