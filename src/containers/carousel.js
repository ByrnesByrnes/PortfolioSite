import React, { useState, useEffect } from 'react'
import { Carousel } from '../components'
import { GrPrevious, GrNext } from 'react-icons/gr'

export function CarouselContainer({ slides, alt }) {
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
    }, 200)
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
    }, 200)
    setCurrent(current => current = 0)

  }

  useEffect(() => {
    const id = setTimeout(() => nextSlide(), 4000)
    return () => clearTimeout(id)
  }, [current])

  return (
    <Carousel style={{ justifyContent: direction}}>
      {slides.map((slide, i) => (
        <Carousel.Slide
          src={slide}
          alt={alt}
          key={i}
          style={{
            transform: `translateX(${current}%)`,
            transition: current === 0 ? 'none' : '.4s ease-in-out'
          }}
        />
       
      ))}

      <Carousel.Arrow onClick={prevSlide}><GrPrevious /></Carousel.Arrow>
      <Carousel.Arrow onClick={nextSlide}><GrNext /></Carousel.Arrow>

    </Carousel>
  )
}