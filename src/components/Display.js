import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  grid-row: ${props => 'span ' + props.rowSpan};
  grid-column: ${props => 'span ' + props.colSpan};
`

function Display({ data, ...props }) {
  const string = data.join('')
  return <Wrapper {...props}> {string} </Wrapper>
}

export default Display
