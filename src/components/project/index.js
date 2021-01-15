import React from 'react';
import {
  Container,
  Image,
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
  return <Container {...restProps}>{children}</Container>
}
Project.Item = function ProjectItem({children, ...restProps}) {
  return <Item {...restProps}>{children}</Item>
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

Project.Image = function ProjectImage({children, ...restProps}) {
  return <Image {...restProps}>{children}</Image>
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

