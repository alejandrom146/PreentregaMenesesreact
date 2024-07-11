import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
<>
        <Navbar bg="warning" data-bs-theme="dark">
        <Container className='barra'>
          <Navbar.Brand href="#home">NBA Store</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Lakers</Nav.Link>
            <Nav.Link href="#features">Chicago</Nav.Link>
            <Nav.Link href="#pricing">Boston</Nav.Link>
          </Nav>
          <CartWidget/>
        </Container>
        </Navbar>
</>
);

