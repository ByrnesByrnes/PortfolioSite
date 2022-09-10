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
  position: relative;
  align-items: center;
  min-height: 100vh;
  background: var(--clr-bg);
  transition: .4s ease-in-out;
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

export const ScrollDown = styled(smoothLink)
`
  background: none;
  padding: 0;
  color: var(--clr-secondary);
  font-size: 4rem;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  transition: .4s ease-in-out;

  &:hover {
    color: var(--clr-primary);
    border-color: var(--clr-secondary);
    border-radius: 50%;
   
  }
`

export const ImageContainer = styled.div 
`
  position: relative;
  display: none;
  transition: .4s ease-in-out;
  opacity: 0;
  transform: scale(1);
  transform-origin: right;
  animation: ${fadeIn} 1s ease-in-out forwards;
  animation-delay: 3.8s;
  margin-left: auto;
 
  & > div {
    position: absolute;
    transform: scale(.25);
    right: 3rem;
    top: 14rem;
  }

  @media (min-width: 840px) {
    display: block;
    transform: scale(.8);
  }

  @media (min-width: 1040px) {
    transform: scale(.8);
    
    & > div {
      right: 7rem;
      top: 20.5rem;
    }
   
  }
  @media (min-width: 1200px) {
    
    transform: scale(1);
  }
`
export const Image = styled.img 
`
  width: 800px;

  @media(min-width: 1040px) {
    width: 1000px;
  }
`

export const Group = styled.div 
`
  position: absolute;
  z-index: 10;

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