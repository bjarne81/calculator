import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  height: 100%;
`

function Buttons({ children }) {
  return <Wrapper> {children} </Wrapper>
}

export default Buttons
