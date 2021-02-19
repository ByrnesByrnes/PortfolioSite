import styled from 'styled-components'

export const Container = styled.div   
`
  max-width: 1300px;
  display:flex;
  overflow-x: hidden;
  margin: 0 auto;
  position: relative;
`

export const Slide = styled.img
`
  width: 100%;
  height: auto;
  transition: .2s;
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
  height: 50px;
  padding: 10px;
  &:last-of-type {
    left: auto;
    right: 0;
    
  }

  &:hover {
   
    fill: red;
  }
`