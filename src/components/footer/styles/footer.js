import styled from 'styled-components'

export const Container = styled.section 
`
  position: relative;
  height: 50px;
  display: grid;
  align-items:center;
  


  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 100vw;
    background: rgba(167, 203, 232, .5);
    margin: 0 -50vw;
    z-index: -1;
  }
`

export const Text = styled.p 
`
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    margin-right: 5px;
  }
`