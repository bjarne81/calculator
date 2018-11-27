import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dedede;
  grid-row: ${props => 'span ' + props.rowSpan};
  grid-column: ${props => 'span ' + props.colSpan};
  font-size: 12vh;
  justify-content: flex-end;

  .auto-scaling-text {
    padding: 0 30px;
    position: absolute;
    right: 0;
    transform-origin: right;
  }
`
function AutoScalingText({ children }) {
  const [scale, setScale] = useState(1)
  const node = useRef(null)
  useEffect(
    () => {
      const parentNode = node.current.parentNode
      const availableWidth = parentNode.offsetWidth
      const actualWidth = node.current.offsetWidth
      const actualScale = availableWidth / actualWidth

      if (actualScale < 1) {
        setScale(actualScale)
      } else if (scale < 1) {
        setScale(1)
      }
    },
    [children],
  )

  return (
    <div
      className="auto-scaling-text"
      style={{ transform: `scale(${scale},${scale})` }}
      ref={node}
    >
      {children}
    </div>
  )
}

function Display({ value, ...props }) {
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
