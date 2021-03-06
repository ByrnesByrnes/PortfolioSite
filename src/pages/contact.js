import React from 'react';
import { FormContainer } from '../containers/form'
import { Contact as Info } from '../components'
import { SocialsContainer} from '../containers/socials'
 

export default function Contact(){
  return (
    <Info>
      <FormContainer setModalShow={() => false} />
      <SocialsContainer />
    </Info>
  )
}