import styled from 'styled-components'

export const Container = styled.div   
`
  display:flex;
  overflow: hidden;
  position: relative;
  border: 3px solid red;

  // justify-content: flex-start;
  // width: 100%;
  // height: fit-content;
  

  // @media (min-width: 700px) {
  //   max-width: 1300px;
  // }
`

export const Slide = styled.img
`
  // display: block;
  width: 100%;
  // object-fit: contain;
  // transition: '.4s ease-in-out;
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