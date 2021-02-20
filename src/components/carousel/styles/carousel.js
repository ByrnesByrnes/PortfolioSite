import styled from 'styled-components'

export const Container = styled.div   
`
  position: relative;
  border: 3px solid red;
  display: flex;
  width: 100%;

`
export const Content = styled.div
`
  display: block;
  border: 2px solid blue;
  width: 100%;
`

export const Slide = styled.img
`
  display: block;
  width: 100%;

 
`

export const Arrow = styled.div
`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  transition: .3s ease-in-out;
  font-size: 1.4rem;
  padding: 10px;
  display: flex;
  align-items: center;

  &:last-of-type {
    left: auto;
    right: 0;
  }

  &:hover {
    background: rgba(0,0,0, 0.2);
  }
`

export const Full = styled.div
`
  position: relative;
  max-width: 1440px;
  overflow: hidden;
  width: 100%;
  display: flex;

  & .carousel__slide {
    border: 1px solid yellow;
  }

  & .carousel__image {
    border: 1px solid pink;
    width: 100%;
  }


  & .carousel__prev {

  }
  
  & .carousel__next {

  }
`