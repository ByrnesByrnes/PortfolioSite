import styled, { keyframes } from 'styled-components'
import {
  Link as RouterLink,
  fadeInBottom
} from '../../../globalStyles'


const moonAppear = keyframes
`

`

export const Container = styled.header
`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0 10%;
  width: 100%;
  height: 60px;
  background: var(--clr-bg);
  z-index: 20;
  transition: .4s ease-in-out;

  @media (min-width: 991px) {
    
  }
`

export const Group = styled.div
`

`

export const Nav = styled.nav
`
  position: absolute;
  top: 60px;
  height: 100vh;
  width: 100%;
  left: 0;
  transform: translateX(${({ toggle }) => toggle ? '0%' : '-100%' });
  z-index: 200;
  transition: 0.5s;
  
  @media (min-width: 991px) {
    background: none;
    width: fit-content;
    left: auto;
    top: 0;
    right: 10%;
    height: fit-content;
    transform: translateX(0);
  }

`
export const NavList = styled.ul
  `
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  background: var(--clr-bg);
  transition: .4s ease-in-out;
  
  @media (min-width: 991px) {
    flex-direction: row;
    height: fit-content;
    align-items: center;
  }
`
export const NavItem = styled.li
`
`

export const Link = styled(RouterLink)
`
  display: block;
  background: var(--clr-bg);
  margin: 0;
  color: var(--clr-primary);
  width: 100%;
  border-bottom: 1px solid var(--clr-bdr);

  &.active {
    background: var(--clr-secondary);
  }
  &:hover {
    background: var(--clr-secondary);
  }

  @media (min-width: 991px) {
    border: none;
  }
`

export const Logo = styled.div
`
  position: relative;
  z-index: 20;
  opacity: 0;
  height: 50px;
  line-height: 50px;
  font-size: 2em;
  font-weight: 700;
  animation: ${fadeInBottom} .5s ease-in-out forwards;
  animation-delay: 4s;

  ${RouterLink} {
    padding: 0;
    margin: 0;
    background: none;
    border: none;
    color: var(--clr-primary);
  }
`

export const Toggle = styled.div
`
  opacity: 0;
  position: absolute;
  z-index: 20;
  font-size: 2em;
  padding-right: 10%;
  height: 32px;
  right: 0;
  cursor: pointer;
  color: var(--clr-primary);
  transition: .5s;

  animation: ${fadeInBottom} .5s ease-in-out forwards;
  animation-delay: 2s;
  @media(min-width: 991px) {
    display: none;
  }
`

export const Theme = styled.div 
`
  position: absolute;
  display: flex;
  align-items: center;
  right: 20%;
  margin-right: 10px;
  width: 50px;
  height: 25px;
  background-color: var(--clr-secondary);
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  
  svg {
    position: absolute;
    top: 50%;
    transform: 
      translateY(-50%) 
      translateX(${({ darkMode }) => darkMode ? '100%' : '0'}) scaleX(-1)
      rotate(${({ darkMode }) => darkMode ? '0deg' : '-90deg'});

    font-size: 25px;
    color: #000;
    border-radius: 50%;
    z-index: 1;
    transition: .3s ease;

    & ~ svg {
      color: ${({ darkMode }) => darkMode ? 'orange' : '#fff'};
      z-index: 0;
      background: grey;
      
    }
  }
`