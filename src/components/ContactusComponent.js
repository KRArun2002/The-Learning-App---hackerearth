import React, { useState } from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

const Contactus = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [result, setResult] = useState(null)

  const sendEmail = event => {
    event.preventDefault()

    axios
      .post('/send', { ...state })
      .then(response => {
        setResult(response.data)
        setState({ name: '', email: '', subject: '', message: '' })
      })
      .catch(() => {
        setResult({
          success: false,
          message: 'Something went wrong. Try again later'
        })
      })
  }

  const onInputChange = event => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value
    })
  }

  return (
    <div className="container">
        <div className="row">
            <div className="col-5 offset-3 mt-4 mb-4">
            <h1>Enquiry Form</h1>
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                {result.message}
                </p>
            )}
            <form onSubmit={sendEmail}>
                <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your full name"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your email"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="subject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                    type="text"
                    name="subject"
                    value={state.subject}
                    placeholder="Enter subject"
                    onChange={onInputChange}
                />
                </Form.Group>
                <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea" 
                    name="message"
                    value={state.message}
                    placeholder="Enter your message"
                    onChange={onInputChange}
                    rows={5} 
                />
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Contactus