import styled, { keyframes } from 'styled-components'

const load = keyframes
`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(0);
  }
`

export const Container = styled.div 
`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 300;

  .layer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: top;
    animation: ${load} .5s ease-in-out forwards;
  }
  
  .layer:first-child {
    background: #000;
    z-index: 2;
  }

  .layer:last-child {
    background: var(--clr-secondary);
    animation-delay: .5s;
    z-index: 1;
  }

`