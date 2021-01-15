import React from 'react';
import { FormContainer } from '../containers/form'
import { Contact as Info } from '../components'

export default function Contact(){
  return (
    <Info>
      <FormContainer setModalShow={() => false} />
    </Info>
  )
}