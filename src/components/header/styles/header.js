import styled from 'styled-components'
import {
  Link as RouterLink,
  fadeInBottom
} from '../../../globalStyles'


export const Container = styled.header
`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0 10%;
  width: 100%;
  height: 60px;

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
  background: #fff;
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
  background: #fff;
  margin: 0;
  color: black;
  width: 100%;
  border-bottom: 1px solid rgba(0,0,0,.2);
  

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
  color: var(--clr-primary);
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
  }
`

export const Toggle = styled.div
`
  opacity: 0;
  position: absolute;
  top: 25%;
  z-index: 20;
  font-size: 2em;

  padding-right: 10%;
  right: 0;
  cursor: pointer;
  transition: .5s;

  animation: ${fadeInBottom} .5s ease-in-out forwards;
  animation-delay: 2s;
  @media(min-width: 991px) {
    display: none;
  }
`

export const Theme = styled.div 
`
  margin-right: 20px;
  width: 50px;
  height: 25px;
  border: 1px solid black;
  
  .themeContainer {
    
  }
`