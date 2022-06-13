import React from "react";
import "./navbar.css";
import image from "../../Photos/Discovery.png"
import 
{
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Offcanvas,
  Form,
  FormControl,
  Button,
  Image,
  Col,
} from "react-bootstrap";
const MyNavbar = () => {
    return (
      <>
      {[false].map((expand) => (
        <Navbar fixed="top" key={expand} bg="light" expand={expand} id="myNAV" className="justify-content-start">
        <Container id="con1" className="justify-content-start">
          <Col className="justify-content-start" id="col1">
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} id="toggle"/>
            <Navbar.Brand href="#">
             <Image src={image} id="img"></Image>
            </Navbar.Brand>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              className="offCanvas"
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Discovery+
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Link</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Form className="d-flex">
                  <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            </Col>
          </Container>
        </Navbar>
      ))}
    </>
    );
  };
  
  export default MyNavbar;