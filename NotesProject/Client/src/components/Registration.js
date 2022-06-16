import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";




function Registration() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [passwordReg, setPasswordReg] = useState("");

  
  const register = () => {
    navigate("/");
    axios
      .post("http://localhost:3001/register", {
        name: name,
        email: email,
        password: passwordReg,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <div style={{ marginTop: "100px", marginLeft: "440px" }}>
        <Card
          id="user"
          style={{
            width: "500px",
            border: "5px solid",
            fontFamily: "sans-serif",
          }}
        >
          <CardBody>
            <CardTitle>
              <h2 className="text-center">Create User</h2>
            </CardTitle>
            <br></br>

            <Form id="form">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className="mt-2">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormGroup>

              <FormGroup>
                <Label for="password" className="mt-2">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
              </FormGroup>

              <br />
              <Button onClick={register} color="success">
                Register
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Registration;
