import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import JuiceGridList from './JuiceGridList'
import imgHolder from '../assets/img-holder.png'

const juices = [
  {
    url: require('../assets/img-holder.png'),
    name: 'Juice 1',
    style: 'Lorum epsum Lorum epsum Lorum epsum',
    flavor: 'Fruity',
    lbu: '10',
    abv: '20'
  },
  {
    url: imgHolder,
    name: 'Juice 1',
    style: 'Lorum epsum Lorum epsum Lorum epsum',
    flavor: 'Fruity',
    lbu: '10',
    abv: '20'
  },
  {
    url: imgHolder,
    name: 'Juice 1',
    style: 'Lorum epsum Lorum epsum Lorum epsum',
    flavor: 'Fruity',
    lbu: '10',
    abv: '20'
  },
  {
    url: imgHolder,
    name: 'Juice 1',
    style: 'Lorum epsum Lorum epsum Lorum epsum',
    flavor: 'Fruity',
    lbu: '10',
    abv: '20'
  }
]

const ResultsPage = styled.div`
  text-align: center;
  .main {
    display: flex;
    justify-content: center;
  }
`
const Title = styled.div`
  font-size: 24px;
  line-height: 35px;
  letter-spacing: 0px;
  color: #707070;
  text-transform: capitalize;
`
const SubTitle = styled.div`
  font-size: 55px;
  line-height: 60px;
  letter-spacing: 0px;
  color: #393B40;
  text-transform: capitalize;
  margin-bottom: 28px;
`
const ShowMore = styled.button`
  margin: 28px;
  box-shadow: 2px 3px 6px #00000029;
  border: 1px solid #EBA800;
  border-radius: 16px;
  width: 260px;
  height: 40px;
  outline: none;
  color: #6B6969;
`
const Result = ({ result }) => {
  
  const [ showMoreJuices, setShowMoreJuices ] = useState(false)
  
  useEffect( () => {
    console.log('-------Result--------')
    console.log(result)
    setShowMoreJuices(false)
  }, [result])

  
  return ( 
    <ResultsPage>
      <Title>Your Results</Title>
      <SubTitle>Juices Picked For You</SubTitle>
      <div className="main">
        <JuiceGridList juices={juices} count={3}/>
      </div>
      <ShowMore onClick={() => setShowMoreJuices(true)}>Show More Juices</ShowMore>
      {
        showMoreJuices && <JuiceGridList juices={juices} count={4}/>
      }
    </ResultsPage>
  );
}

export default Result;