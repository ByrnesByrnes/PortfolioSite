import React from 'react';
import { Contact } from '../components'
import { FormContainer } from '../containers/form'


export function ContactContainer() {
  return (
    <Contact>
      <h1>Contact <span className="accent">Me</span></h1>

      will have email and contact info on left here i think?
      <FormContainer setModalShow={() => false} />
    </Contact>
  )
}