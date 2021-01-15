import styled from 'styled-components'

export const Container = styled.section
`
  padding-top: 60px;
  margin: 0 auto;
  max-width: 1200px;
`
export const Item = styled.div
`
  display: flex;
  flex-direction: column;
  margin: 20px 50px;
  padding-bottom: 20px;
  justify-content: center;
  height: fit-content;
  border-bottom: 1px solid var(--clr-secondary);

  :last-of-type {
    border-bottom: none;
  }

  @media (min-width: 991px) {
    flex-direction: row;
    
    align-items: center;
    gap: 50px;
  }

`

export const Group = styled.div
`
  width: 80%;
  margin: auto;
`
export const Info = styled.div 
`
  width: 100%;
`
export const Title = styled.h2
`
  color: var(--clr-secondary);
`

export const Subtitle = styled.h3
`
  font-weight: 600;
`

export const Text = styled.p 
`
 
`

export const Image = styled.img 
`

  width: 100%;
`
export const LinkGroup = styled.div
`
  text-align:center;

  @media (min-width 991px) {
    text-align: left;
  }
`

export const Link = styled.a
`
  cursor: pointer;
  color: #fff;
  margin:0 10px 30px;
  font-weight: 600;
  padding: 10px 20px;
  background: #000;
  border-radius: 8px;
  transition: .4s ease-in-out;
  display: inline-block;

  &:hover {
    background: var(--clr-secondary);

  }
`
