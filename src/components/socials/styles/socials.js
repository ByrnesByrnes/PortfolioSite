import styled from 'styled-components'

export const Container = styled.div
`
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 80px;
  display: flex;
  flex-direction: column;
`

export const List = styled.ul 
`

`

export const Item = styled.li 
`
  cursor: pointer;
  font-size: 2em;
  color: #000;
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