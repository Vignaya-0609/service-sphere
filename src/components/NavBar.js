import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Banner from './Banner';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Footer from './Footer';

function NavBar() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#home">ServiceSphere</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className='text-dark fw-medium'>
            <Nav.Link onClick={() => scrollToElement("home")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToElement("about")}>About</Nav.Link>
            <Nav.Link onClick={() => scrollToElement("service")}>Services</Nav.Link>
            <Nav.Link onClick={() => scrollToElement("contact")}>Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Banner/>
    <About/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default NavBar;