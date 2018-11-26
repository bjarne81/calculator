import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  grid-row: ${props => 'span ' + props.span};
`

function Button({ onClick, span, value, label }) {
  return (
    <Wrapper onClick={onClick} span={span} data-value={value}>
      {label}
    </Wrapper>
  )
}

export default Button
