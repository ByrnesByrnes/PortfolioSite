import React from 'react';
import {
  Container,
  Group, 
  Title,
} from './styles/contact'

export default function Contact({children, ...restProps}) {
  return <Container id="contact" {...restProps}>{children}</Container>
}

Contact.Group = function ContactGroup({children, ...restProps}) {
  return <Group {...restProps}>{children}</Group>
}
Contact.Title = function ContactTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}