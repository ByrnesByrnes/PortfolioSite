import React, { useState, useEffect } from 'react';
import { GrPrevious, GrNext } from 'react-icons/gr'
import {
  Container,
  Content,
  Slide,
  Arrow,
  Full
} from './styles/carousel'

export default function Carousel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
};

Carousel.Content = function CarouselContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>
}
Carousel.Slide = function CarouselSlide({ ...restProps }) {
  return <Slide {...restProps} />
}

Carousel.Arrow = function CarouselArrow({ children, ...restProps }) {
  return <Arrow {...restProps}>{children}</Arrow>
}


Carousel.Full = function CarouselFull({ children, slides, alt, ...restProps }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('flex-start')

  const prevSlide = () => {
    if (direction === 'flex-start') {
      let firstSlide = slides.shift()
      slides.push(firstSlide)
      setDirection('flex-end')

    }
    setTimeout(() => {
      setCurrent(current => current + 100)
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
    }, 100)
    setCurrent(current => current = 0)

  }

  const nextSlide = () => {
    if (direction === 'flex-end') {
      let lastSlide = slides.pop()
      slides.unshift(lastSlide)
      setDirection('flex-start')
    }

    setTimeout(() => {
      setCurrent(current => current - 100)
      let firstSlide = slides.shift()
      slides.push(firstSlide)
    }, 100)
    setCurrent(current => current = 0)

  }

  // useEffect(() => {
  //   const id = setTimeout(() => nextSlide(), 4000)
  //   return () => clearTimeout(id)
  // }, [current])

  return (
    <Full
      className="carousel"
      style={{ justifyContent: direction }}
      {...restProps}
    >
      {slides.map((slide, i) => (
    
       


          <img 
            className="carousel__image" 
            src={slide} alt={alt} 
            key={i}
            style={{
            transform: `translateX(${current}%)`,
            transition: current === 0 ? 'none' : '.4s ease-in-out'
          }}
          />

      
      ))}


      {/* <div
        onClick={prevSlide}
        className="carousel__prev"><GrPrevious /></div>
      <div
        onClick={nextSlide}
        className="carousel__next"><GrNext /></div> */}

    </Full>
  )
}