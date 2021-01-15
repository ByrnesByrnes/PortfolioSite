import styled from 'styled-components'

export const Container = styled.section 
`
  position: relative;
  padding-top: 60px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1500px;
  width: 100%;
  min-height: 700px;
  height: 100vh;

  @media (min-width: 600px) {
    flex-direction: row;
  }


`

export const Skills = styled.div 
`

  display: grid;
  grid-template-columns: repeat(2, 1fr);

  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;
  text-align: center;
  height: fit-content;
  gap: 10px;

  @media (min-width: 600px) {
  grid-template-columns: repeat(4, 1fr);

  }
`

export const Group = styled.div 
`
  width: 100%;
  margin: 0 auto;
`
export const Title = styled.h2 
`
  font-size: 4em;
`

export const Subtitle = styled.h3
`
  font-size: 2em;
  font-weight: 600;
`
export const Skill = styled.div
`

`

export const Text = styled.p
`
  font-size: 1.5em
`

export const Icon = styled.div
`
  font-size: 4em;
`

export const IconImage = styled.img 
`
  object-fit: cover;
  width: 100px;
`