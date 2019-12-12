import React from "react";
import { Col, Row, Container } from "reactstrap";
import { Link } from "react-router-dom";

const StartPage = () => {
  return (
    <Container fluid className="startpage">
      <h2 className="page-title">Komponenter</h2>
      <Row className="text-center">
        <Col lg={4}>
          <Link to="/FormPage">
            <h3>FormPage</h3>
          </Link>
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
