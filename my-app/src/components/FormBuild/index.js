import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "reactstrap";

const FormBuild = () => {
  //input values States
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  //error messages
  const [errorPhone] = useState("Phone doesnt work");
  const [errorName] = useState("Name doesnt work");
  const [errorEmail] = useState("Email doesnt work");

  const [validation, setvalidation] = useState({
    //Values
    nameValue: true,
    phoneValue: true,
    emailValue: true,
    //Errors
    errorName: false,
    errorPhone: false,
    errorEmail: false
  });

  //Send forms input values
  const sendForm = evt => {
    evt.preventDefault();

    //validation for the forms input values
    const validate = () => {
      let x = { ...validation };
      //Validation Name
      if (nameValue === "" || nameValue.length < 3) {
        x.nameValue = false;
        console.log(errorName);
      } else {
        x.nameValue = true;
      }

      //Validation Phone
      if (
        phoneValue === "" ||
        phoneValue.length < 10 ||
        !/^0[7][0-9]{8}$/.test(phoneValue)
      ) {
        x.phoneValue = false;
        console.log(errorPhone);
      } else {
        x.phoneValue = true;
      }

      //Validation Email
      if (
        emailValue === "" ||
        emailValue.length < 4 ||
        !/\w\w+@\w\w+\.\w\w+/.test(emailValue)
      ) {
        x.emailValue = false;
        console.log(errorEmail);
      } else {
        x.emailValue = true;
      }

      //If validation is true or false do this
      setvalidation(x);
      if (x.nameValue && x.phoneValue && x.emailValue) {
        console.log("works!");
        return true;
      } else {
        return false;
      }
    };

    //if validation works do this
    if (validate()) {
      console.log(
        " Name:" + nameValue + "\n",
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
