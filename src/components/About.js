import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
// import abt from "../assets/img/about.jpg";
import abt from "../assets/img/abt.webp";
function About() {
  return (
    <>
    <Container className='mt-5' id="about">
        <h1 className="text-center mb-3">About Us</h1>
        <p>At ServiceSphere, we pride ourselves on delivering top-notch services with a focus on quality, reliability, and customer satisfaction. Our team of experienced professionals is dedicated to meeting your needs, whether it’s system installations, repairs, consultations, etc.</p>
        <p>With 10 years of industry experience, we understand that every client has unique requirements. That's why we offer personalized solutions tailored to your specific needs. We are committed to excellence in every project we undertake, ensuring that you receive the best service possible.</p>
        <p>Choose ServiceSphere for a seamless, hassle-free experience where your satisfaction is our priority.</p>
        <Row>
          <Col md={12}>
            <img src={abt} alt='abt' className='img-fluid w-100'></img>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default About