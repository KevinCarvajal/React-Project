import React from "react";
import { Row, Col, Container } from "reactstrap";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row className="text-center pb-4 pt-5 footer-content">
          <Col md={6}>
            <div className="info">
              <h5 className="bold">test</h5>
              <address>
                <ul className="info-style">
                  <li>
                    <span>1355 Market St,Suite 900</span>
                  </li>
                  <li>
                    <span>San Fransisco, CA 94103</span>
                  </li>
                  <li>
                    <span>P:(123) 456-7890</span>
                  </li>
                </ul>
              </address>
            </div>
            <div className="contact">
              <h5 className="bold">Kontakt</h5>
              <ul className="info-style">
                <li>
                  <span>test@gmail.com</span>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6}>
            <p>hello </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
