import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css'

function Navigation() {
  return (

    <>
    <Container>
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Call me_</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
          
          
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Phones</Nav.Link>
            <NavDropdown title="User" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Sign Up</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Log In
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Log Out
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              About Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="what are you looking for? iPhone11, SamsungGalaxy"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Container>
          </>
  );
}

export default Navigation;