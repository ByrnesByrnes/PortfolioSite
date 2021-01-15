import React from 'react';
import {
  Container
} from './styles/load'

export default function Load({...restProps}) {
  return (
    <Container>
      <div className="layer"></div>
      <div className="layer"></div>
    </Container>
  )
}