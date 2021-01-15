import styled from 'styled-components'

export const Content = styled.div 
`
  transform: ${({ modalShow }) => modalShow ? 'scaleY(1)' : 'scaleY(0)'};
  width: ${({ modalShow }) => modalShow ? '100%' : '0'};
  transition: .3s ease-in-out;
`

export const Container = styled.div 
`
  position: fixed;
  z-index: 400;
  right: 8%;
  bottom: 50px;
`