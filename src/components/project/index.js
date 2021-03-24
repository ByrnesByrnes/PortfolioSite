import React, {useState, useRef, useEffect } from 'react';
import {
  Container,
  Title,
  Subtitle,
  Text,
  Link,
  Item,
  Group,
  Info,
  LinkGroup
} from './styles/project'

export default function Project({children, ...restProps}) {
  
  return <Container id="projects" {...restProps}>{children}</Container>
}

//  working on observer turning into a hook

// const UseObserver = (setShow) => {
 

//   const domNode = useRef(new IntersectionObserver((entries) => {
//     const first = entries[0]
//     setShow(first.isIntersecting)
//   },{threshold: .5}))  

//   useEffect(() => {
//     if(domNode) domNode.current.observe(domNode)

//     return () => domNode.current.unobserve(domNode)
//   },[domNode])

//   return domNode 
// }

Project.Item = function ProjectItem({children, ...restProps}) {
  const [element, setElement] = useState(null)
  const [show, setShow] = useState(false)


  // const domNode = UseObserver(() => {
  //   setShow(true)
  // })
  
  const itemRef = useRef(new IntersectionObserver((entries) => {
    const first = entries[0]
    setShow(first.isIntersecting)
  },
  {threshold: .5}))
  
  useEffect(() => {
   
    const currentObserver = itemRef.current

    if(element)currentObserver.observe(element)

    return () => element && currentObserver.unobserve(element)
  },[element])

  return (
    <Item 
      className={show ? 'show' : ''}
      ref={setElement} 
      {...restProps}
    >{children}
    </Item>)
}
Project.Group = function ProjectGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}
Project.Info = function ProjectInfo({children, ...restProps}) {
  return <Info {...restProps}>{children}</Info>
}
Project.Title = function ProjectTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Project.Subtitle = function ProjectSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Project.Text = function ProjectText({children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Project.Link = function ProjectLink({children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

Project.LinkGroup = function ProjectLinkGroup({children, ...restProps}) {
  return <LinkGroup {...restProps}>{children}</LinkGroup>
}

