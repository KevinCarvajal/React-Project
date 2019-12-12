import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

const FormBuild = () => {
  //input values States
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [errorMessage] = useState("doesnt work");

  const [validation, setvalidation] = useState({
    nameValue: true,
    phoneValue: true,
    emailValue: true
  });

  const [error] = useState({
    errorMessage: true
  });

  //Send forms input values
  const sendForm = evt => {
    evt.preventDefault();

    //validation for the forms input values
    const validate = () => {
      let x = { ...validation };
      let t = { ...error };
      if (nameValue === "" || nameValue.length < 3) {
        x.nameValue = false;
      } else {
        x.nameValue = true;
      }
      if (
        phoneValue === "" ||
        phoneValue.length < 10 ||
        !/^0[7][0-9]{8}$/.test(phoneValue)
      ) {
        x.phoneValue = false;
      } else {
        x.phoneValue = true;
      }
      if (
        emailValue === "" ||
        emailValue.length < 4 ||
        !/\w\w+@\w\w+\.\w\w+/.test(emailValue)
      ) {
        x.emailValue = false;
      } else {
        x.emailValue = true;
      }
      setvalidation(x);
      if (x.nameValue && x.phoneValue && x.emailValue) return true;
      else {
        t.errorMessage = false;
        console.log(errorMessage);

        return false;
      }
    };
    if (validate()) {
      console.log(
        "Name:" + nameValue + "\n",
        "Phone:" + phoneValue + "\n",
        "Email:" + emailValue + "\n"
      );
    }
  };

  return (
    <Container className="formContent text-center">
      <Form onSubmit={sendForm}>
        <h2>Form</h2>
        <Row className="input-field no-gutters">
          <Col className="test" lg={12}>
            <h4>Name</h4>
            <input
              value={nameValue}
              onChange={e => setNameValue(e.target.value)}
            ></input>
          </Col>
          <Col className="test" lg={12}>
            <h4>phonenr</h4>
            <input
              value={phoneValue}
              onChange={e => setPhoneValue(e.target.value)}
            ></input>
          </Col>
          <Col className="test" lg={12}>
            <h4>Email</h4>
            <input
              value={emailValue}
              onChange={e => setEmailValue(e.target.value)}
            ></input>
          </Col>
        </Row>
      </Form>

      <Button onClick={sendForm}>Send Values</Button>
    </Container>
  );
};

export default FormBuild;
