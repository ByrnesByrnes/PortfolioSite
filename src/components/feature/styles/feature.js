import styled from 'styled-components'
import {
  revealText,
  revealTextReverse,
  fadeIn,
  Link as smoothLink,
} from '../../../globalStyles'

export const Container = styled.section
`
 
  display: flex;
  align-items: center;
  background: var(--clr-bg);
  transition: .4s ease-in-out;
  min-height: 100vh;
  
`

export const Title = styled.h1 
`
  position: relative;
  z-index: 10;

 

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

export const Link = styled(smoothLink)
`
  border-radius: 8px;

  &:hover {
    color: var(--clr-primary);
    background: var(--clr-secondary);
  }
`
export const ImageContainer = styled.div 
`
  position: relative;
  display: none;
  transition: .4s ease-in-out;
  opacity: 0;
  transform: scale(.4);
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3.8s;
  width: 1000px;


  & > div {
    position: absolute;
    transform: scale(.25);
    right: 35px;
    top: 25.5rem;
  }

  @media (min-width: 800px) {
    display: block;
    margin-left: auto;
    transform: scale(.6);
  }

  @media (min-width: 1200px) {
    
    transform: scale(.8);
  }
`
export const Image = styled.img 
`
`

export const Group = styled.div 
`
  position: absolute;

  ${Title},
  ${Subtitle} {
  
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
    background: var(--clr-secondary);
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