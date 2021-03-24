import React, { useState } from 'react';
import { Form } from '../components'


const encode = data => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
}


export function FormContainer({ setModalShow, messageTitle="Send Message" }) {
  const [confirm, setConfirm] = useState('')
  const [state, setState] = useState({
    email: '',
    name: '',
    message: ''
  })

  const handleSubmit = event => {
    event.preventDefault()

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...state
      })
    })
      .then(() => {
        setState({
          name: "",
          email: "",
          message: ""
        }) 

        setConfirm("Thank You I'll respond as soon as Possible")
        
        setTimeout(() => {
          if (setModalShow) setModalShow(false)
          setTimeout(() => {
            setConfirm('')
          }, 2000);
        }, 4000);       
      })
      .catch(error => setConfirm(error));
  }

  const handleChange = event => setState({...state, [event.target.name]: event.target.value})
  const {name, email, message} = state

  return (
    <Form 
      onSubmit={handleSubmit}
      name="contact" 
      method="post" 
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
    <input type="hidden" name="form-name" value="contact" />
      {confirm ?
        <Form.Title style={{ 
          fontSize: "1rem",
          margin: '0px' 
        }}>{confirm}</Form.Title> :
        <>
          <Form.Title>{messageTitle}</Form.Title>
          <Form.InputBox>
            <Form.Input
              type="text"
              required="required"
              name="name"
              value={name}
              onChange={handleChange}
            />
            <Form.Label>Full Name</Form.Label>
          </Form.InputBox>

          <Form.InputBox>
            <Form.Input
              type="email"
              name="email"
              required="required"
              value={email}
              onChange={handleChange}
            />
            <Form.Label>Email</Form.Label>
          </Form.InputBox>
          <Form.InputBox>
            <Form.TextArea
              required="required"
              name="message"
              value={message}
              onChange={handleChange}
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