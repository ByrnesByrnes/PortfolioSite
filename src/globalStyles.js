import React from 'react'
import styled, { createGlobalStyle, keyframes } from 'styled-components'
import {NavLink as RouterLink } from 'react-router-dom'
// Colors


const primary = '#000'

const secondary = '#2196F3'
const third = 'crimson'
const white = '#fff'
const darkGrey = '#101010'
const black = '#000'


// const size = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '425px',
//   tablet: '768px',
//   laptop: '1024px',
//   laptopL: '1440px',
//   desktop: '2560px'
// }

// export const device = {
//   mobileS: `(min-width: ${size.mobileS})`,
//   mobileM: `(min-width: ${size.mobileM})`,
//   mobileL: `(min-width: ${size.mobileL})`,
//   tablet: `(min-width: ${size.tablet})`,
//   laptop: `(min-width: ${size.laptop})`,
//   laptopL: `(min-width: ${size.laptopL})`,
//   desktop: `(min-width: ${size.desktop})`,
//   desktopL: `(min-width: ${size.desktop})`
// };

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

  ${({darkMode}) => console.log(darkMode)}

  html { 
    box-sizing: border-box;
    font-size: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  :root {
    --clr-primary: ${({darkMode}) => darkMode ? white : black }; //black
    --clr-secondary: ${({darkMode}) => darkMode ? third : secondary }; //Blue
    --clr-bg: ${({darkMode}) => darkMode ? darkGrey : white };
  }

  body {
    position: relative;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    line-height: 1.3;
    font-family: 'Titillium Web', sans-serif;
    background: --clr-bg;
    transition: 1s ease;
  }

  // ==== General Styles =====
  h1,h2,h3,h4,h5 {
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
  }
`

export const Link = styled(RouterLink)
`
  position: relative;
  z-index: 10;
  opacity: 0;
  font-weight: 600;
  display: inline-block;
  margin: 20px 0 0;
  padding: 10px 20px;
  background: #000;
  color: #fff;
  text-decoration: none;
  font-size: 1.2em;
  letter-spacing: 1px;
  transform: translateX(0);
  animation: ${fadeInBottom} 0.5s linear forwards;
  animation-delay: 4s;
  transition: .4s ease-in-out;
`