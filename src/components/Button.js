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

function Button({ onClick, value, label, ...props }) {
  return (
    <Wrapper onClick={onClick} data-value={value} {...props}>
      {label}
    </Wrapper>
  )
}

export default Button
