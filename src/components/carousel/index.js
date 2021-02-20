import React from 'react';
import {
  Container,
  Content,
  Slide,
  Arrow
} from './styles/carousel'

export default function Carousel({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
};

Carousel.Content = function CarouselContent({children, ...restProps}) {
  return <Content {...restProps}>{children}</Content>
}
Carousel.Slide = function CarouselSlide({ ...restProps}) {
  return <Slide {...restProps} />
}

Carousel.Arrow = function CarouselArrow({children, ...restProps}) {
  return <Arrow {...restProps}>{children}</Arrow>
}




