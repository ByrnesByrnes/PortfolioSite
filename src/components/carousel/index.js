import React from 'react';

import {
  Container,
  Slide,
  Arrow,
} from './styles/carousel'

export default function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
};


Carousel.Slide = function CarouselSlide({src, ...restProps }) {
  return <Slide src={src} {...restProps} />
}

Carousel.Arrow = function CarouselArrow({ children, ...restProps }) {
  return <Arrow {...restProps}>{children}</Arrow>
}