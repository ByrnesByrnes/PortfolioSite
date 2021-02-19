import styled from 'styled-components'

export const Container = styled.div   
`
  overflow: hidden;
  position: relative;
  border: 3px solid red;
 
  width: 100%;
  

`
export const Content =styled.div
`
  border: 2px solid blue;
  display:flex;
`

export const Slide = styled.img
`
  
  width: 100%;
  object-fit: contain;
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
  height: 100%;
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