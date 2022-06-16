import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";




function Createnotes() {
  let navigate = useNavigate();
  const [notes, setNotes] = useState({});
  const handleForm = (e) => {
    e.preventDefault();
    console.log(notes);
    postdata(notes);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });


  // Sending data to database
  const uid = localStorage.getItem("id");
  const postdata = (data) => {
    axios.post(`/add/${uid}`, data).then(
      (response) => {
        console.log(response);
        alert("success");
        navigate("/shownotes");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div>
      <Header />
      <div style={{ marginTop: "80px", marginLeft: "400px" }}>
        <Card id="user" style={{ width: "700px", border: "5px solid" }}>
          <CardBody>
            <CardTitle>
              <h2
                className="text-center"
                style={{ fontFamily: "unset", fontSize: "50px" }}
              >
                Add Notes
              </h2>
            </CardTitle>
            <br></br>

            {/* form to create note */}
            <Form onSubmit={handleForm}>
              <Label for="name">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter your title"
                type="text"
                onChange={(e) => {
                  setNotes({ ...notes, title: e.target.value });
                }}
              />
              <br />
              <label for="date">Enter Date</label>

              <Input
                type="text"
                placeholder="Enter date like 1999-09-02"
                id="date"
                onChange={(e) => {
                  setNotes({ ...notes, date: e.target.value });
                }}
              ></Input>
              <br />

              <Label for="name">Content</Label>
              <Input
                id="content"
                name="content"
                placeholder="Enter your content"
                type="textarea"
                onChange={(e) => {
                  setNotes({ ...notes, content: e.target.value });
                }}
              />
              <br />
              <Button
                type="submit"
                onClick={(e) => {
                  setNotes({ ...notes, uid: e.target.value });
                }}
                color="success"
              >
                Add Notes
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Createnotes;
