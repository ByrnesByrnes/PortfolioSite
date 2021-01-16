import styled from 'styled-components'

export const Container = styled.section 
` 
  display: grid;
  align-items: center;
  height: 100vh;
  background: var(--clr-bg);
  transition: .4s ease-in-out;
  
  & > form {
    background: transparent;
    box-shadow: none;
  }
`

