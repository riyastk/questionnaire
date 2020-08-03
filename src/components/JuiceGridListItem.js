import React from 'react'
import styled from 'styled-components'

const JuiceItem = styled.div`
  //width: 382px;
`
const Image = styled.img`
  width: 100px;
`
const Button = styled.button`
  margin: 28px;
  width: 160px;
  height: 40px;
  background: #EBA600 0% 0% no-repeat padding-box;
  box-shadow: 2px 3px 6px #00000029;
  border-radius: 16px;
  border: none;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0px;
  color: #FFFFFF;
  text-transform: capitalize;
  outline: none;
`

const JuiceGridListItem = ({juice}) => {
  return ( 
    <JuiceItem>
      <Image src={juice.url}/>
      <h2>{juice.name}</h2>
      <p>
        <span><b>Style: </b></span>
        <span>{juice.style}</span>
        <br/><br/>
        <span><b>Flavor/Aroma: </b></span>
        <span>{juice.flavor}</span>
      </p>
      <div>
        <span><b>Bitterness (lbu): </b></span>
        <span>{juice.lbu}</span>
      </div>
      <div>
        <span><b>Flavor/Aroma (Abv): </b></span>
        <span>{juice.abv}</span>
      </div>
      <Button onClick={() => console.log('Buy This Juice')}>Buy This Juice</Button>
    </JuiceItem>
  );
}

export default JuiceGridListItem