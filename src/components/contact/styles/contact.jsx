import styled from 'styled-components'

export const Container = styled.section 
` 
  position: relative;
  display:grid;
  align-items: center;
  max-width: 1000px;
  // background: var(--clr-bg);
  transition: .4s ease-in-out;
  min-height: 60vh;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    height: 100%;
    width: 100vw;
    background: rgba(167, 203, 232, .3);
    margin: 0 -50vw;
    z-index: -1;
  }
`
export const Title = styled.h1 
`
  text-align: center;
  margin-bottom: 0;
`

export const Group = styled.div 
`
  margin: 0 auto;

  & > form {
    background: transparent;
    box-shadow: none;
  }

  @media(min-width: 600px) {
    margin: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

