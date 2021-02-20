import styled from 'styled-components'

export const Container = styled.div   
`
  position: relative;
  border: 3px solid red;
`
export const Content = styled.div
`
  overflow: hidden;
  border: 2px solid blue;
  display: flex;
  max-height: 205px;

  @media(min-width: 600px) {
    max-height: none;
  }

`

export const Slide = styled.img
`
  width: 100%;
  object-fit: contain;
  object-position: center top;

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