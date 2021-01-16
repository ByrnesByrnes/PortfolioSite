import styled from 'styled-components'

export const Skills = styled.div 
`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  height: fit-content;
  align-items: flex-end;

  @media (min-width: 600px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Group = styled.div 
`
  width: 100%;
  margin: 0 auto;
  text-align: center;
`
export const Title = styled.h2 
` 
  font-size: 2em;
`

export const Subtitle = styled.h3
`
  font-size: 1.5em;
  font-weight: 600;

  @media (min-width: 600px) {
    font-size: 2em;
  }
`
export const Skill = styled.div
`
  margin-top: 20px;
  height: fit-content;
`

export const Text = styled.p
`
  font-size: 1.2em;
  font-weight: 600;
  width: 100%;

  line-height: 1.5;

  @media(min-width: 600px) {
    font-size: 4em;
  }
`

export const Icon = styled.div
`
  font-size: 3em;

  @media(min-width: 600px) {
    font-size: 4em;
  }
`

export const IconImage = styled.img 
`
  object-fit: cover;
  max-width: 100px;
`

export const Container = styled.section 
`
  position: relative;
  padding: 100px 10px 0;
  display: flex;
  background: var(--clr-bg);
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  width: 100%;
  min-height: 500px;
  height: 100vh;
  transition: .4s ease-in-out;
  
  @media (min-width: 600px) {
    flex-direction: row;
    margin: 0 auto;

    justify-content: space-between;
    ${Title} {
      font-size: 4em;
    }
  }


`