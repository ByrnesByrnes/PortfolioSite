import React, { useRef, useEffect } from 'react';
import { 
  Container,
  Title,
  Input,
  InputBox,
  TextArea,
  Frame,
  Button,
  Label
} from './styles/form'

export default function Form({children, ...restProps}) {

  return <Container {...restProps}>{children}</Container>
}
Form.Title = function FormTitle({children, ...restProps}) {
  return <Title{...restProps}>{children}</Title>
}

Form.Frame = function FormFrame({children, ...restProps}) {
  return <Frame {...restProps}>{children}</Frame>
}
Form.InputBox = function FormInputBox({children, ...restProps}) {
  return <InputBox {...restProps}>{children}</InputBox>
}
Form.Input = function FormInput({...restProps}) {
  return <Input {...restProps} />
}
Form.TextArea = function FormTextArea({...restProps}) {
  return <TextArea {...restProps}></TextArea>
}
Form.Label = function FormLabel({children, ...restProps}) {
  return <Label {...restProps}>{children}</Label>
}

Form.Button = function FormButton({children, ...restProps}) {
  return <Button {...restProps}>{children}</Button>
}