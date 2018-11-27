import React, { useState } from 'react'
import Display from './Display'
import CalculatorKeys from './CalculatorKeys'
import CalculatorKey from './CalculatorKey'

function App() {
  const [displayValue, setDisplayValue] = useState(0)
  const handleClick = value => {
    setDisplayValue(value)
  }
  return (
    <div className="App">
      <CalculatorKeys>
        <Display value={displayValue} colSpan="4" />
        <CalculatorKey onPress={() => handleClick('clear')}>AC</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('+/-')}>+/-</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('%')}>%</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('/')}>/</CalculatorKey>

        <CalculatorKey onPress={() => handleClick('7')}>7</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('8')}>8</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('9')}>9</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('*')}>x</CalculatorKey>

        <CalculatorKey onPress={() => handleClick('4')}>4</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('5')}>5</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('6')}>6</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('-')}>-</CalculatorKey>

        <CalculatorKey onPress={() => handleClick('1')}>1</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('2')}>2</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('3')}>3</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('+')}>+</CalculatorKey>

        <CalculatorKey onPress={() => handleClick('0')}>0</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('.')}>.</CalculatorKey>
        <CalculatorKey onPress={() => handleClick('=')}>=</CalculatorKey>
      </CalculatorKeys>
    </div>
  )
}

export default App
