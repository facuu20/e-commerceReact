import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CarWidget from '../CarWidget/CarWidget';
import './NavBar.css'
function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">MotorSport HOUSE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/productos">Inicio</Nav.Link>
            <Nav.Link href="/productos/auto">AUTOS</Nav.Link>
            <Nav.Link href="/productos/camioneta">CAMIONETAS</Nav.Link>
            <Nav.Link href="/productos/moto">MOTOS</Nav.Link>
            <Nav.Link href="/carrito"><CarWidget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  )}



export default NavBar;
