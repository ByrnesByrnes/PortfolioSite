import React, { useState } from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im'
import { BiMessageDetail } from 'react-icons/bi'
import { Socials, Modal } from '../components'
import { FormContainer} from './form'

export function SocialsContainer() {
  const [modalShow, setModalShow] = useState(false)

  const curRoute = window.location.pathname
 
  return (
    <Socials setModalShow={setModalShow}>
      <Socials.List>
        <Socials.Item>
          <Socials.Link target="_blank" href="https://github.com/ByrnesByrnes"><ImGithub /></Socials.Link>
        </Socials.Item>
        <Socials.Item>
          <Socials.Link target="_blank" href="https://www.linkedin.com/in/myron-byrnes"><ImLinkedin /></Socials.Link>
        </Socials.Item>
        
         <Socials.Item style={{ display: 'block'}}>
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