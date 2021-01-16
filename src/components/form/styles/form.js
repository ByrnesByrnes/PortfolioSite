import styled from 'styled-components'

export const Container = styled.form
`
  display:flex;
  flex-direction: column;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  margin: 0 auto;
  background: var(--clr-form);
  box-shadow: 10px 5px 25px 4px rgba(0,0,0,0.15);
  -webkit-box-shadow: 5px 10px 25px 4px rgba(0,0,0,0.15);
  -moz-box-shadow: 10px 5px 25px 4px rgba(0,0,0,0.15);
  transition: .5 ease;
`
export const Frame = styled.form 
`

`

export const Title = styled.h2 
`
  font-size: 2em;
  margin-bottom: 20px;
`

export const Text = styled.p 
`

`

export const Label = styled.span
`
  position: absolute;
  left: 0;
  padding: 5px 0 0 10px;
  margin: 10px 0;
  pointer-events: none;
  transition: .5s;
  color: var(--clr-bdr);
`


export const Input = styled.input 
`
  color: inherit;
`

export const Button = styled.button 
`
  cursor:pointer;
  border: none;
  border-radius: 8px;
  width: fit-content;
  font-weight: 600;
  margin: 20px 0 0;
  padding: 10px 20px;
  background: var(--clr-primary);
  color: var(--clr-text);
  font-size: 1em;
  letter-spacing: 1px;

  transition: .4s ease-in-out;

  :hover {
    color: var(--clr-primary);
    background: var(--clr-secondary);
  }
`

export const TextArea = styled.textarea
`
 
`

export const InputBox = styled.div
`
  position: relative;
  width: 100%;

  ${Input},
  ${TextArea} {
    margin: 10px 0;
    padding: 5px 0 5px 10px;
    border: none;
    border-bottom: 2px solid var(--clr-secondary);
    width: 100%;
    font-size: 16px;
    outline: none;
    resize: none;
    color: var(--clr-primary);
    background: transparent;
  }

  ${Input}:focus ~ ${Label},
  ${Input}:valid ~ ${Label},
  ${TextArea}:focus ~ ${Label},
  ${TextArea}:valid ~ ${Label}{
    color: var(--clr-secondary);
    transform: translateY(-20px);
    font-size: 12px;
  }

`