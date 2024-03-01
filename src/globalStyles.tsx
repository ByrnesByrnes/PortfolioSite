import styled, { createGlobalStyle, keyframes } from 'styled-components'
import {Link as SmoothLink} from 'react-scroll'

// Colors


const primary = '#000'

const secondary = '#2196F3'
const third = 'crimson'
const white = '#fff'
const darkGrey = '#151515'
const black = '#000'
const darkBorder = 'rgb(100,100,100)'
const lightBorder = 'rgb(220,220,220)'

// Animations
export const revealText = keyframes
`
  0% {
    transform: scaleX(1);
  }
  100%{
    transform: scaleX(0);
  } 
`
export const revealTextReverse = keyframes
`
  0% {
    transform: scaleX(0);
  }
  100%{
    transform: scaleX(1);
  } 
`

export const fadeIn = keyframes
`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`
export const fadeInBottom = keyframes
`
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity 1;
  }
`

export const GlobalStyle = createGlobalStyle
`
  html {
    scroll-behavior: smooth;
    box-sizing: border-box;
    font-size: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  :root {
    --clr-primary: ${({darkMode}) => darkMode ? white : black }; //black

    --clr-secondary: ${secondary}; //Blue
    --clr-bg: ${({darkMode}) => darkMode ? darkGrey : white };
    --clr-bdr: ${({darkMode}) => darkMode ? lightBorder : darkBorder };
    --clr-form: ${({darkMode}) => darkMode ? '#202020' : white };
    --clr-text: ${({darkMode}) => !darkMode ? white : black }
  }

  body {
    position: relative;
    margin: 0;
    padding: 0;
    line-height: 1.3;
    font-family: 'Titillium Web', sans-serif;
    background: var(--clr-bg);
    transition: background .4s ease-in-out;
    overflow-x: hidden;
    width: 100%;
  }

  // ==== General Styles =====
  section {
    margin: 0 auto;
    max-width: 1400px;
    width: 100%;
    padding: 0 20px;
    transition: .4s ease-in-out;

    @media (min-width: 800px) {
      // padding: 0 100px;
    }
  }

  h1,h2,h3,h4,h5,p {
    color: var(--clr-primary);
    padding: 0;
    margin: 0;
  }

  h1 {
    font-size: 3rem;
    width: 100%;
    margin: 30px 0 0px;
    
    & > .accent {
      color: var(--clr-secondary);
    }
    @media (min-width: 500px) {
      margin: 30px 0;
      font-size: 4rem;
    }
  }

  p {
    font-size: 1.5rem;
    font-weight: 600;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  .resume {
    position: relative;
    z-index: 10;
    opacity: 0;
    font-weight: 600;
    display: inline-block;
    margin: 20px 0 0 10px;
    padding: 10px 20px;
    background: var(--clr-primary);
    color: var(--clr-text);
    text-decoration: none;
    font-size: 1.2em;
    letter-spacing: 1px;
    transform: translateX(0);
    animation: ${fadeInBottom} 0.5s linear forwards;
    animation-delay: 4s;
    transition: .4s ease-in-out;
    border-radius: 8px;
    &:hover {
      color: var(--clr-primary);
      background: var(--clr-secondary);
    }
  }
`

export const Link = styled(SmoothLink)
`
  cursor: pointer;
  position: relative;
  z-index: 10;
  opacity: 0;
  font-weight: 600;
  display: inline-block;
  margin: 20px 0 0;
  padding: 10px 20px;
  background: var(--clr-primary);
  color: var(--clr-text);
  text-decoration: none;
  font-size: 1.2em;
  letter-spacing: 1px;
  transform: translateX(0);
  animation: ${fadeInBottom} 0.5s linear forwards;
  animation-delay: 4s;
  transition: .4s ease-in-out;
`