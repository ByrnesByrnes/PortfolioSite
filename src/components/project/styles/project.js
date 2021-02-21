import styled, {keyframes} from 'styled-components'


const fadeIn = keyframes
`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`
export const Container = styled.section
`
  background: var(--clr-bg);
  transition: .4s ease-in-out;
`

export const Group = styled.div
`
 
`
export const Info = styled.div 
`
  width: 100%;
  transition: 1s ease-in-out;
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
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 15px;
  line-height: 1.5;

  & > svg {
    color: var(--clr-secondary);
    border: 2px solid var(--clr-secondary);
    border-radius: 50px;
    height: 30px;
    width: 30px;
    padding: 3px;
    margin-left: 10px;
  }
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

export const Item = styled.div
`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px 0;
  border-bottom: 1px solid var(--clr-secondary);
  opacity: 0;
  
  transition: .4s ease-in-out;
  & > ${Info} {
    transform: translateX(108%); 
  }
  &:nth-child(even) {
    & > ${Info}{
      transform: translateX(-108%); 
    }
  }

  &.show {
    & > ${Info} {
      transform: translateX(0);
      transition-delay: .5s;
    }
    opacity: 1;
  }

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