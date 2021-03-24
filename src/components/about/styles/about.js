import styled from 'styled-components'

export const Skills = styled.div 
`

  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  height: fit-content;
  align-items: flex-end;

  @media(min-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
    max-width: 800px;
    margin: 0 auto;
  }
`

export const Group = styled.div 
`
  margin: 4rem 0px;
  padding: 0 10px;
  width: 100%;
  text-align: center;
  
  @media (min-width: 800px) {
    &:first-of-type {
      display: flex;
      justify-content: space-around;
     
    }
    &:last-of-type{
      text-align: center;
    }
  }
`
export const Title = styled.h1 
`
  min-width: fit-content;
  width: 100%;
`

export const Subtitle = styled.h3
`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  @media (min-width: 600px) {
    font-size: 2rem;
  }
`
export const Skill = styled.div
`
  margin-top: 20px;
  height: fit-content;

  @media (min-width: 800px) {
    margin-bottom: 20px;
  }
`

export const Text = styled.p
`

  width: 100%;
  @media(min-width: 800px) {
    max-width: 500px;
    text-align: left;
  }
`

export const Icon = styled.div
`
  font-size: 3rem;

  @media(min-width: 600px) {
    font-size: 4rem;
  }
`

export const IconImage = styled.img 
`
  object-fit: cover;
  max-width: 100px;
`

export const Container = styled.section 
`
  padding: 20px 0;
  max-width: 1000px;
  position: relative;

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
  @media (min-width: 600px) {
    flex-direction: row;
    margin: 0 auto;

    justify-content: space-between;
    ${Title} {
      font-size: 4rem;
    }
  }


`