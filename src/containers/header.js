import React, { useState } from 'react';
import { Header } from '../components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdExit } from 'react-icons/io'
import * as ROUTES from '../constants/routes'
import { navLinks } from '../navbarLinks' // data for Links

export function HeaderContainer() {
  const [toggle, setToggle] = useState(false)
  const [theme, setTheme] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }


  const handleTheme = () => {
    console.log('hello')
  }
  // 2 sections space them between each other
  return (
    <Header>
        <Header.Logo>
          <Header.Link exact to={ROUTES.HOME}>MB</Header.Link>
        </Header.Logo>
        <Header.Nav toggle={toggle}>
          <Header.NavList>
            <Header.Theme onClick={handleTheme} />
            {navLinks.map(item => (
              <Header.NavItem key={item.id}>
                <Header.Link
                  exact
                  onClick={() => setToggle(false)}
                  to={item.link}
                >{item.title}</Header.Link>
              </Header.NavItem>
            ))}
          </Header.NavList>
        </Header.Nav>
        <Header.Toggle onClick={handleToggle} toggle={toggle}>
          {toggle ? <IoMdExit /> : <GiHamburgerMenu />}
        </Header.Toggle>
    </Header>
  )
}