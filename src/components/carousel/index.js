import React from 'react';
import {
  Container,
  Slide,
  Arrow
} from './styles/carousel'

export default function Carousel({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
};

Carousel.Slide = function CarouselSlide({children, ...restProps}) {
  return <Slide {...restProps}>{children}</Slide>
}

Carousel.Arrow = function CarouselArrow({children, ...restProps}) {
  return <Arrow {...restProps}>{children}</Arrow>
}




