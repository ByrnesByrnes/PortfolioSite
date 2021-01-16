import React, { useState } from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im'
import { BiMessageDetail } from 'react-icons/bi'
import { Socials, Modal } from '../components'
import { FormContainer} from './form'
import * as ROUTES from '../constants/routes'

export function SocialsContainer() {
  const [modalShow, setModalShow] = useState(false)

  const curRoute = window.location.pathname
 
  return (
    <Socials setModalShow={setModalShow}>
      <Socials.List>
        <Socials.Item>
          <Socials.Link href="#"><ImGithub /></Socials.Link>
        </Socials.Item>
        <Socials.Item>
          <Socials.Link href="#"><ImLinkedin /></Socials.Link>
        </Socials.Item>
        
         <Socials.Item style={{ display: curRoute === ROUTES.CONTACT ? 'none' : 'block'}}>
          <BiMessageDetail onClick={() => setModalShow(!modalShow)} />
        </Socials.Item>
        <Modal>
          <Modal.Content modalShow={modalShow}>
            <FormContainer setModalShow={setModalShow}/>
          </Modal.Content>
        </Modal>
        

      
      </Socials.List>
    </Socials>
  )
}