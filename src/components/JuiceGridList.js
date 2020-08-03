import React from 'react'
import styled from 'styled-components'

import JuiceGridListItem from './JuiceGridListItem'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.count}, 1fr);
  grid-column-gap: 32px;
  grid-row-gap: 32px  ;
  width: fit-content;
`
const JuiceGridList = ({juices, count}) => {
  return ( 
    <Wrapper count={count}>
      {
        juices.slice(0, count).map( (juice, index) => {
          return (
            <JuiceGridListItem key={index} juice={juice}/>
          )
        })
      }
    </Wrapper>
   );
}

export default JuiceGridList;