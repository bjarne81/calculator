import React from 'react'
import styled from 'styled-components'

const Key = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dedede;
  grid-row: ${props => 'span ' + props.rowSpan};
  grid-column: ${props => 'span ' + props.colSpan};

  button {
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

function CalculatorKey({ onPress, className, ...props }) {
  return (
    <Key onClick={onPress}>
      <button {...props} />
    </Key>
  )
}

export default CalculatorKey
