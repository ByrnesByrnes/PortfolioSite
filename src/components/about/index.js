import React from 'react';
import {
  Container,
  Group,
  Icon,
  Title,
  Subtitle,
  Text,
  Skill,
  Skills,
  IconImage,
} from './styles/about'

export default function About({children, ...restProps}) {
  return <Container id="about" {...restProps}>{children}</Container>
}

About.Group = function AboutGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}

About.Title = function AboutTitle({ children,...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

About.Subtitle = function AboutSubtitle({ children,...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}
About.Icon = function AboutIcon({ children,...restProps}) {
  return <Icon {...restProps}>{children}</Icon>
}
About.Text = function AboutText({ children,...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

About.Skills = function AboutSkills({children, ...restProps}) {
  return <Skills {...restProps}>{children}</Skills>
}
About.Skill = function AboutSkill({children, ...restProps}) {
  return <Skill {...restProps}>{children}</Skill>
}
About.IconImage = function AboutIconImage({...restProps}) {
  return <IconImage {...restProps}/>
}