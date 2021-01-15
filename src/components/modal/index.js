import React from 'react';
import {
  Container,
  Content,
} from './styles/modal'

export default function Modal({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Modal.Content = function ModalContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>
}