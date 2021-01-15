import React, { useEffect, useRef } from 'react';
import {
  Container,
  Item, 
  Link, 
  List
} from './styles/socials'

let ClickOutside = handler => {
  let domNode = useRef()

  useEffect(() => {
    let checkHandler = event => {
      if(!domNode.current.contains(event.target)) {
        handler()
      }
    }
    
    document.addEventListener('mousedown', checkHandler)
    return () => document.removeEventListener('mousedown',checkHandler)
  }, [])

  return domNode
}



export default function Socials({children, setModalShow, ...restProps}) {

  let domNode = ClickOutside(() =>{

    setModalShow(false)
  }) 

  return <Container ref={domNode} {...restProps}>{children}</Container>
}

Socials.List = function SocialsList({children, ...restProps}) {
  return <List {...restProps}>{children}</List>
}

Socials.Item = function SocialsItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
}

Socials.Link = function SocialsLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}
