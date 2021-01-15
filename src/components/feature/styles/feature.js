import styled from 'styled-components'
import {
  revealText,
  revealTextReverse,
  fadeIn,
  Link as RouterLink,
} from '../../../globalStyles'

export const Container = styled.section
`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: var(--clr-bg);
  display: grid;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2 
`
  position: relative;
  z-index: 10;
  font-size: 3em;

  @media (min-width: 991px) {
    font-size: 6em;
  }
  @media (max-width: 390px) {
    font-size: 2.5em;
  }
`

export const Subtitle = styled.h3
`
  position: relative;
  z-index: 10;
  font-size: 1.8rem;

  @media (min-width: 991px) {
    font-size: 3em;
  }
  @media (max-width: 390px) {
    font-size: 1.5em;
  }
`

export const Text = styled.p 
`
  position:relative;
  z-index: 5;
  opacity: 0;
  font-weight: 400;
  font-size: 1.2em;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3.4s;

`

export const Link = styled(RouterLink)
`
  border-radius: 8px;

  &:hover {
    background: var(--clr-secondary);
  }
`

export const Image = styled.img 
`
  position: absolute;
  opacity: 0;
  max-width: 500px;
  transform: translateX(-10%);
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3.8s;

  @media (min-width: 991px) {
    top: 42%;
    right: 10%;
    width: 50%;
    max-width: 1400px;
  }

`

export const Group = styled.div 
`
  position: absolute;
  left: 10%;
  max-width: 700px;
  
  ${Title},
  ${Subtitle} {
    position: relative;
    display: inline-block;
    transform-origin: left;
    text-transform: uppercase;
    transform: scaleX(0);
    animation: ${revealTextReverse} 1s ease-in-out forwards;
  }  

  ${Title}:before,
  ${Subtitle}:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #000;
    width: 100%;
    height: 100%;
    transform-origin: right;
    animation: ${revealText} 1s ease-in-out forwards;
    animation-delay: 2s;
  }

  ${Title} {
    animation-delay: 1s;
  }

  ${Subtitle} {
    animation-delay: 2s;
  }

  ${Subtitle}:before {
    animation-delay: 2.9s;
  }
`
  
