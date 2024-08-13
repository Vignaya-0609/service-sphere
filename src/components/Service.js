import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import drill from "../assets/img/drill.png";
import paint from "../assets/img/paint.png";
import hammer from "../assets/img/hammer.png";
import flooring from "../assets/img/flooring.png";
import "../assets/css/style.css";
const arr=[{
    img:drill,
    name:"Electrical Work",
    desc:"Install, maintain, and repair electrical systems, ensuring safety, and efficiency with regulations."
},
{
    img:paint,
    name:"Painting",
    desc:"Apply paint, coatings, or finishes to surfaces, enhancing aesthetics, protection, and durability of structures."
},
{
    img:hammer,
    name:"Carpenting",
    desc:"Construct, install, and repair wooden structures and fixtures, ensuring durability, and quality craftsmanship."
},
{
    img:flooring,
    name:"Flooring",
    desc:"Install, repair, and finish various flooring materials, ensuring a level, durable, and visually appealing surface."
}]
function Service() {
  return (
    <Container className='mt-5' id="service">
        <h1 className='text-center mb-3'>Our Services</h1>
    <Row xs={1} lg={4} md={2} className="g-4">
      {arr.map((data, idx) => (
        <Col key={idx}>
          <Card className='cards'>
            <Card.Img variant="top" src={data.img} className='card-img'/>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
                {data.desc}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
    
  );
}

export default Service;