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
function AutoScalingText({ children }) {
  const scale = 1

  return (
    <div
      className="auto-scaling-text"
      style={{ transform: `scale(${scale},${scale})` }}
    >
      {children}
    </div>
  )
}

function Display({ value = 0, ...props }) {
  const language = navigator.language || 'en-US'
  let formattedValue = parseFloat(value).toLocaleString(language, {
    useGrouping: true,
    maximumFractionDigits: 6,
  })

  // Add back missing .0 in e.g. 12.0
  // const match = value.match(/\.\d*?(0*)$/)

  // if (match) formattedValue += /[1-9]/.test(match[0]) ? match[1] : match[0]

  return (
    <Wrapper {...props}>
      <AutoScalingText>{formattedValue}</AutoScalingText>
    </Wrapper>
  )
}

export default Display
