import { faDatabase, faLongArrowAltUp } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
import Header from "./Header";





function Profile() {
  let navigate = useNavigate();

  useEffect(() => {
    getUser();
  }, []);

  const [user, setUser] = useState("");

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [passwordReg, setPasswordReg] = useState("");



//   requesting data from Node
  const getUser = () => {
    axios
      .get(`http://localhost:3001/profile`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then(
        (response) => {
          if (response.data.message) {
            console.log(response.data.message);
            alert(response.data.message);
            navigate("/");
          } else {
            console.log(response.data.user[0]);

            setUser(response.data.user[0]);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  };


//   updating data in node Database
  const updateUser = () => {
    navigate("/");
    axios
      .post("http://localhost:3001/update", {
        name: name,
        email: email,
        password: passwordReg,
        id: id,
      })
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <div>
      <Header />
      <div style={{ marginLeft: "400px", width: "400px" }}>
        <Card
          id="user"
          style={{ marginTop: "20px", width: "700px", border: "2px solid" }}
        >
          <CardBody>
            <CardTitle>
              <h2 className="text-center" style={{ fontSize: "50px" }}>
                Profile
              </h2>
            </CardTitle>
            <br></br>

            <Form id="form">
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  disabled
                  type="text"
                  defaultValue={user.name}
                  onMouseOver={(e) => {
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
                  disabled
                  type="email"
                  defaultValue={user.email}
                  onMouseOver={(e) => {
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
                  type="password"
                  onChange={(e) => {
                    setPasswordReg(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className="mt-2">
                  id
                </Label>
                <Input
                  hidden
                  id="id"
                  name="id"
                  disabled
                  type="text"
                  defaultValue={user.id}
                  onMouseOver={(e) => {
                    setId(e.target.value);
                  }}
                />
              </FormGroup>

              <Button onClick={updateUser} color="success">
                Update
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Profile;
