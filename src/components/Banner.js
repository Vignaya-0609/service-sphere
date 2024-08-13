import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import bannerImg from "../assets/img/banner.png";
import Button from 'react-bootstrap/Button';
import "../assets/css/style.css";
import { SiTicktick } from "react-icons/si";
function Banner() {
  return (
    <Container fluid className='banner-content' id="home">
        <Row>
            <Col md={5} xs={12} className='img-content mb-5'>
                <img src={bannerImg} alt='banner' className='img-fluid'></img>
            </Col>
            <Col md={7} xs={12} className='content'>
                <h1>Reliable, Trusted,</h1>
                <h1>and Professional</h1> 
                <h1>Services</h1>
                <Row className='fw-medium'>
                    <Col md={6} xs={4} className='service-content'><SiTicktick /> Office</Col>
                    <Col  md={6} xs={4} className='service-content'><SiTicktick /> Kitchen</Col>
                    <Col  md={6} xs={4} className='service-content'><SiTicktick /> Living Room</Col>
                    <Col  md={6} xs={4} className='service-content'><SiTicktick /> Basement</Col>
                </Row>
                <Row>
                    <Col md={12} className='mt-4'><Button variant="outline-dark" className='fw-medium'>Contact Us</Button></Col>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}

export default Banner