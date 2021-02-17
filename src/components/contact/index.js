import React from 'react';
import {
  Container
} from './styles/contact'

export default function Contact({children, ...restProps}) {
  return <Container id="contact" {...restProps}>{children}</Container>
}