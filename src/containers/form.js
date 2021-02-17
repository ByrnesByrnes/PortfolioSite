import React, { useState, useEffect } from 'react';
import { Form } from '../components'

export function FormContainer({ setModalShow, messageTitle="Send Message" }) {
  const [confirm, setConfirm] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    setConfirm('Thank You I\'ll respond as soon as Possible')

    setTimeout(() => {
      if (setModalShow) setModalShow(false)
      setTimeout(() => {

        setName('')
        setEmail('')
        setMessage('')
        setConfirm('')
      }, 500);
    }, 3000);

  }

  return (
    <Form onSubmit={handleSubmit}>
      {confirm ?
        <Form.Title style={{ fontSize: "1rem" }}>{confirm}</Form.Title> :
        <>
          <Form.Title>{messageTitle}</Form.Title>
          <Form.InputBox>
            <Form.Input
              type="test"
              required="required"
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <Form.Label>Full Name</Form.Label>
          </Form.InputBox>

          <Form.InputBox>
            <Form.Input
              type="email"
              required="required"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <Form.Label>Email</Form.Label>
          </Form.InputBox>
          <Form.InputBox>
            <Form.TextArea
              required="required"
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
            <Form.Label>Type your message...</Form.Label>
          </Form.InputBox>
          <Form.Button>Send</Form.Button>
        </>
      }

    </Form>
  )
}

//https://www.youtube.com/watch?v=gggB0Nq5vBk