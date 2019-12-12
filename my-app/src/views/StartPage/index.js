import React from "react";
import { Col, Row, Container } from "reactstrap";

const StartPage = () => {
  return (
    <Container fluid className="startpage">
      <h2 className="page-title">Startsidan</h2>

      <Row className="text-center">
        <Col lg={4}>
          <h3>FormPage</h3>
        </Col>
        <Col lg={4}>
          <h3>Info</h3>
        </Col>
        <Col lg={4}>
          <h3>Modal</h3>
        </Col>
      </Row>
    </Container>
  );
};

export default StartPage;
