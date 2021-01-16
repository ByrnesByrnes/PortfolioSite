import styled from 'styled-components'

export const Container = styled.section 
` 
  display: grid;
  align-items: center;
  height: 100vh;
  background: var(--clr-bg);

  & > form {
    background: transparent;
    box-shadow: none;
  }
`

