import styled from 'styled-components'

export const Container = styled.div   
`
  position: relative;
  border: 3px solid red;
  width: 100%;
`
export const Content = styled.div
`
  overflow: hidden;
  border: 2px solid blue;
  display: flex;
`

export const Slide = styled.img
`
  width: 100%;
  
`

export const Arrow = styled.div
`
  position: absolute;
  top: 50%;
  cursor: pointer;
  transform: translateY(-50%);
  left: 0;
  transition: .3s ease-in-out;
  font-size: 1.4rem;
  padding: 10px;
  
  &:last-of-type {
    left: auto;
    right: 0;
  }

  &:hover {
    background: rgba(0,0,0, 0.2);
  }
`