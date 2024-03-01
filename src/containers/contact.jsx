import React from 'react';
import { Contact, } from '../components'
import { FormContainer } from '../containers/form'


export function ContactContainer() {
  return (
    <Contact>
      <Contact.Title>Contact <span className="accent">Me</span></Contact.Title>
      <Contact.Group>
        {/* <CoffeeMug style={{ 
          transform: "scale(.6)",
          margin: "0 30px"
          }} /> */}
        <FormContainer setModalShow={() => false} messageTitle={"First coffee's on me!"} />
      </Contact.Group>
    </Contact>
  )
}