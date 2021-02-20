import styled from 'styled-components'

export const Container = styled.div   
`
  position: relative;
  border: 3px solid red;
  display: flex;
  width: 100%;
  align-content: flex-start;
  overflow: hidden;

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