import React, {useState} from 'react'
import {Container, Nav, Navbar, Offcanvas, Col, Row} from "react-bootstrap";
import {useRealmApp} from "../RealmApp";
import Sidebar from "./Sidebar";

export default ()=> {

  const [show, setShow] = useState(false);


  const handleShow = () => setShow(!show);


  return   <>
    <Navbar bg="dark" variant="dark" expand={"md"}>
      <Container fluid>
        <Navbar.Toggle onClick = {handleShow}/>
        <Navbar.Brand>
          <Nav.Link href="/">Flibapp</Nav.Link>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Container fluid>
      <Row>
        <Offcanvas show={show} onHide={handleShow}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Sidebar />
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </Container>
  </ >

}
