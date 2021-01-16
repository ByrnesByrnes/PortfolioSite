import React from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi'
import { FiSun } from 'react-icons/fi'
import {
  Container,
  Group,
  Nav,
  NavList,
  NavItem,
  Link,
  Logo,
  Toggle,
  Theme,
} from './styles/header'

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>
}

Header.NavList = function HeaderNavList({ children, ...restProps }) {
  return <NavList {...restProps}>{children}</NavList>
}
Header.Nav = function HeaderNav({ children, ...restProps }) {
  return <Nav {...restProps}>{children}</Nav>
}
Header.NavItem = function HeaderNavItem({ children, ...restProps }) {
  return <NavItem {...restProps}>{children}</NavItem>
}
Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Toggle = function HeaderToggle({ children, ...restProps }) {
  return <Toggle {...restProps}>{children}</Toggle>
}

Header.Theme = function HeaderTheme({ darkMode, ...restProps }) {
  return (
    <Theme {...restProps} darkMode={darkMode}>
      <HiOutlineMoon />
      <HiMoon />
    </Theme>
  )
}

// a theme ball slides left to right with a moon inside