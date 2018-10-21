import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Spinner = styled.div`
  width: 28px;
  height: 28px;
  border: 2px solid lightgray;
  border-top: 2px solid #333;
  border-radius: 50%;
  animation: ${rotate} 450ms linear infinite;
`

export default () => {
  return <Spinner />
}
