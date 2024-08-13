import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <Container fluid className='mt-5 bg-black' id="contact">
        <Row className='p-5'>
            <Col md={4} className='mb-3'>
                <h2 className='text-light'>Subscribe Us</h2>
                <Form.Control type="email" placeholder="Enter email" />
                <Button variant="outline-light" className='mt-3 w-100' type="submit">Subscribe</Button>
            </Col>
            <Col md={4} className='mb-3'>
                <h2 className='text-light'>Whatsapp</h2>
                <p className='text-light'>Send queries for reply.</p>
                <Button variant="outline-light" className='mt-3 w-100'>+91 9876546780</Button>
            </Col>
            <Col md={4} className='mb-3'>
                <h2 className='text-light'>Live Chat</h2>
                <p className='text-light'>Get in touch with us.</p>
                <Button variant="outline-light" className='mt-3 w-100'>Chat</Button>
            </Col>
        </Row>
    </Container>
  )
}

export default Contact