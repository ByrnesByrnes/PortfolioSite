import styled from 'styled-components'

export const Container = styled.section
`
  background: var(--clr-bg);
  transition: .4s ease-in-out;
`
export const Item = styled.div
`
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  justify-content: center;
  
  border-bottom: 1px solid var(--clr-secondary);

  :last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 40px;
  }

  @media (min-width: 991px) {
    flex-direction: row;
    
    align-items: center;
    gap: 50px;

    &:nth-child(even) {
      flex-direction: row-reverse;
    }
  }

`

export const Group = styled.div
`
  margin: 0 auto;
`
export const Info = styled.div 
`
  width: 100%;
  @media (min-width: 991px) {
    min-width: 500px;
  }
`
export const Title = styled.h2
`
  color: var(--clr-secondary);
  margin-bottom: 10px;
`

export const Subtitle = styled.h3
`
  font-weight: 600;
  margin-bottom: 10px;
`

export const Text = styled.p 
`
  font-size: 1rem;
  margin-bottom: 15px;
  line-height: 1.5;
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
  color: var(--clr-text);
  margin:0 10px 30px;
  font-weight: 600;
  padding: 10px 20px;
  background: var(--clr-primary);
  border-radius: 8px;
  transition: .4s ease-in-out;
  display: inline-block;

  &:hover {
    background: var(--clr-secondary);

  }
`
