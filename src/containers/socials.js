import React, { useState } from 'react';
import { ImGithub, ImLinkedin } from 'react-icons/im'
import { AiOutlineMessage } from 'react-icons/ai'
import { Socials, Modal } from '../components'
import { FormContainer} from './form'
export function SocialsContainer() {
  const [modalShow, setModalShow] = useState(false)

  return (
    <Socials setModalShow={setModalShow}>
      <Socials.List>
        <Socials.Item>
          <Socials.Link href="#"><ImGithub /></Socials.Link>
        </Socials.Item>
        <Socials.Item>
          <Socials.Link href="#"><ImLinkedin /></Socials.Link>
        </Socials.Item>
        <Socials.Item>
          <AiOutlineMessage onClick={() => setModalShow(!modalShow)} />
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