import styled from 'styled-components'

export const Container = styled.section
`
  background: var(--clr-bg);
  transition: .4s ease-in-out;
`
export const Item = styled.div
`
  padding: 40px 0;
  border-bottom: 1px solid var(--clr-secondary);

  :last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 40px;
  }

  @media (min-width: 750px) {
    display: flex;
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
  width: 100%;
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
  font-size: 1.8rem;
  color: var(--clr-secondary);
  margin-bottom: 10px;
`

export const Subtitle = styled.h3
`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 10px;
`

export const Text = styled.p 
`
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.5;
`

export const LinkGroup = styled.div
`
  text-align: center;
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
