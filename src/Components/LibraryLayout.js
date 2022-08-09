import React from 'react';
import { Outlet } from 'react-router-dom';
import {Container, Col, Row} from "react-bootstrap";
import Sidebar from "./Sidebar";

export default ()=> {
  return <Container>
    <Row>
      <Col className="d-none d-md-block col-xl-3 col-md-4 col-12 d-flex flex-column"><Sidebar /></Col>
      <Col><Outlet /></Col>
    </Row>
  </Container>
}

