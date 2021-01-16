import styled from 'styled-components'

export const Container = styled.div
`
  position: fixed;
  z-index: 10;
  right: 0;
  bottom: 80px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 390px){
    bottom: 40px;
  }
`

export const List = styled.ul 
`

`

export const Item = styled.li 
`
  
  cursor: pointer;
  font-size: 2em;
  color: var(--clr-primary);
  background: none;
  margin: 0 20px;
  padding: 0;
  animation-delay: 4.2s;

  &:hover {
    color: var(--clr-secondary);
  }
`

export const Link = styled.a
` 
  color: inherit;
`