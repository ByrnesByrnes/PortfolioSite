import React, { useState } from 'react';
import { Header } from '../components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoMdExit } from 'react-icons/io'

import { navLinks } from '../navbarLinks' // data for Links


export function HeaderContainer({ darkMode, setDarkMode }) {
  const [toggle, setToggle] = useState(false)


  const handleToggle = () => {
    setToggle(!toggle)
  }

  // 2 sections space them between each other
  return (
    <Header>
      <Header.Group>
        <Header.Logo>
          <Header.Link to="feature" onClick={() => setToggle(false)}>MB</Header.Link>
        </Header.Logo>
          <Header.Theme onClick={setDarkMode} darkMode={darkMode} />
        <Header.Nav toggle={toggle}>
          <Header.NavList>
            {navLinks.map(item => (
              <Header.NavItem key={item.id}>
                <Header.Link
                  activeClass="active"
                  smooth={true}
                  duration={500}
                  offset={-60}
                  spy={true} 
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
      </Header.Group>

    </Header>
  )
}