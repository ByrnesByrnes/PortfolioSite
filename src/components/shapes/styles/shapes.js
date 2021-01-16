import styled, { keyframes } from 'styled-components'
import {fadeIn} from '../../../globalStyles'

const rotate = keyframes
`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const Container = styled.div 
`
  opacity: 0;
  position: absolute;
  min-height: 500px;
  height: 100vh;
  width: 100%;
  animation: ${fadeIn} 2s forwards;
  animation-delay: 4s;
  overflow: hidden;
`

export const Square = styled.div 
`
  position: absolute;
  bottom:-200px;
  left: 50%;
  width: 400px;
  height: 400px;
  border: solid 20px var(--clr-primary);
  
  animation: ${rotate} 50s linear infinite;

  @media(max-width: 390px) {
    bottom: -160px;
  }
`

export const SquareSmall = styled(Square)
`
  top: 20%;
  left: -50px;
  bottom: auto;
  border: solid 10px var(--clr-primary);
  
  height: 100px;
  width: 100px;
  animation-delay: 3s;
  tranition: 2s;
  
  @media (max-width: 390px) {
    top: 12%;
  }
`