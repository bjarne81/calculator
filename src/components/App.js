import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Display from './Display'
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100vh;

  button {
    background: none;
    border: 1px solid #dedede;
    outline: none;
    cursor: pointer;
    padding: 0;
    font-size: 3em;
  }

  .operation {
    background: linear-gradient(
      to bottom,
      rgba(252, 156, 23, 1) 0%,
      rgba(247, 126, 27, 1) 100%
    );
    color: white;
    border-right: 0;
  }
  .key-0 {
    grid-column: span 2;
  }
`

const CalculatorOperations = {
  '/': (prevValue, nextValue) => prevValue / nextValue,
  '*': (prevValue, nextValue) => prevValue * nextValue,
  '+': (prevValue, nextValue) => prevValue + nextValue,
  '-': (prevValue, nextValue) => prevValue - nextValue,
  '=': (prevValue, nextValue) => nextValue,
}

function App() {
  const [displayValue, setDisplayValue] = useState(String(0))
  const [value, setValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)

  function clearDisplay() {
    setDisplayValue(String(0))
  }

  function clearAll() {
    setValue(null)
    setDisplayValue('0')
    setOperator(null)
    setWaitingForOperand(false)
  }

  function inputDigit(digit) {
    if (waitingForOperand) {
      setDisplayValue(String(digit))
      setWaitingForOperand(false)
    } else {
      setDisplayValue(
        displayValue === '0' ? String(digit) : displayValue + digit,
      )
    }
  }

  function inputDot() {
    if (!/\./.test(displayValue)) {
      setDisplayValue(displayValue + '.')
      setWaitingForOperand(false)
    }
  }

  function performOperation(nextOperator) {
    const inputValue = parseFloat(displayValue)

    if (value == null) {
      setValue(inputValue)
    } else if (operator) {
      const currentValue = value || 0
      const newValue = CalculatorOperations[operator](currentValue, inputValue)
      setValue(newValue)
      setDisplayValue(String(newValue))
    }
    setWaitingForOperand(true)
    setOperator(nextOperator)
  }

  function clearLastChar() {
    setDisplayValue(displayValue.substring(0, displayValue.length - 1) || '0')
  }

  function toggleSign() {
    const newValue = parseFloat(displayValue) * -1
    setDisplayValue(String(newValue))
  }

  function inputPercent() {
    const currentValue = parseFloat(displayValue)

    if (currentValue === 0) return

    const fixedDigits = displayValue.replace(/^-?\d*\.?/, '')
    const newValue = parseFloat(displayValue) / 100
    setDisplayValue(String(newValue.toFixed(fixedDigits.length + 2)))
  }

  useEffect(() => {
    function handleKeyDown(event) {
      let { key } = event

      if (key === 'Enter') key = '='

      if (/\d/.test(key)) {
        event.preventDefault()
        inputDigit(parseInt(key, 10))
      } else if (key in CalculatorOperations) {
        event.preventDefault()
        performOperation(key)
      } else if (key === '.') {
        event.preventDefault()
        inputDot()
      } else if (key === '%') {
        event.preventDefault()
        inputPercent()
      } else if (key === 'Backspace') {
        event.preventDefault()
        clearLastChar()
      } else if (key === 'Clear') {
        event.preventDefault()

        if (displayValue !== '0') {
          clearDisplay()
        } else {
          clearAll()
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  })

  return (
    <Wrapper>
      <Display value={displayValue} colSpan="4" />
      <button
        onClick={() => (displayValue !== '0' ? clearDisplay() : clearAll())}
      >
        {displayValue !== '0' ? 'C' : 'AC'}
      </button>
      <button onClick={() => toggleSign()}>+/-</button>
      <button onClick={() => inputPercent()}>%</button>
      <button
        className="operation divide"
        onClick={() => performOperation('/')}
      >
        /
      </button>

      <button onClick={() => inputDigit(7)}>7</button>
      <button onClick={() => inputDigit(8)}>8</button>
      <button onClick={() => inputDigit(9)}>9</button>
      <button
        className="operation multiply"
        onClick={() => performOperation('*')}
      >
        x
      </button>

      <button onClick={() => inputDigit(4)}>4</button>
      <button onClick={() => inputDigit(5)}>5</button>
      <button onClick={() => inputDigit(6)}>6</button>
      <button
        className="operation subtract"
        onClick={() => performOperation('-')}
      >
        -
      </button>

      <button className="digit key-1" onClick={() => inputDigit(1)}>
        1
      </button>
      <button className="digit key-2" onClick={() => inputDigit(2)}>
        2
      </button>
      <button className="digit key-3" onClick={() => inputDigit(3)}>
        3
      </button>
      <button className="operation add" onClick={() => performOperation('+')}>
        +
      </button>

      <button className="digit key-0" onClick={() => inputDigit(0)}>
        0
      </button>
      <button className="digit key-dot" onClick={() => inputDot('.')}>
        .
      </button>
      <button
        className="operation equals"
        onClick={() => performOperation('=')}
      >
        =
      </button>
    </Wrapper>
  )
}

export default App
