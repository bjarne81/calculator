import React, { useState } from 'react'
import Display from './Display'
import Buttons from './Buttons'
import Button from './Button'

function App() {
  const [operations, setOperations] = useState([])
  const handleClick = e => {
    const value = e.target.getAttribute('data-value')
    console.log(value)
  }
  return (
    <div className="App">
      <Buttons>
        <Display data={operations} colSpan="4" />
        <Button onClick={handleClick} label="AC" value="clear" />
        <Button onClick={handleClick} label="+/-" value="clear" />
        <Button onClick={handleClick} label="%" value="%" />
        <Button onClick={handleClick} label="/" value="/" />

        <Button onClick={handleClick} label="7" value="7" />
        <Button onClick={handleClick} label="8" value="8" />
        <Button onClick={handleClick} label="9" value="9" />
        <Button onClick={handleClick} label="x" value="*" />

        <Button onClick={handleClick} label="4" value="4" />
        <Button onClick={handleClick} label="5" value="5" />
        <Button onClick={handleClick} label="6" value="6" />
        <Button onClick={handleClick} label="-" value="-" />

        <Button onClick={handleClick} label="1" value="1" />
        <Button onClick={handleClick} label="2" value="2" />
        <Button onClick={handleClick} label="3" value="3" />
        <Button onClick={handleClick} label="+" value="+" />

        <Button onClick={handleClick} label="0" value="0" colSpan="2" />
        <Button onClick={handleClick} label="." value="." />
        <Button onClick={handleClick} label="=" span="2" value="equal" />
      </Buttons>
    </div>
  )
}

export default App
