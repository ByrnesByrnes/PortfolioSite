import React from 'react';

import {
  Container,
  Square,
  SquareSmall
} from './styles/shapes'

export default function Shapes({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Shapes.Square = function ShapesSquare({children, ...restProps}) {
  return <Square {...restProps}>{children}</Square>
}

Shapes.SquareSmall = function ShapesSquareSmall({children, ...restProps}) {
  return <SquareSmall {...restProps}>{children}</SquareSmall>
}