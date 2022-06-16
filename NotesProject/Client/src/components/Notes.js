import React, { useContext, useEffect } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Update from "./Update";

let noteid = 0;
let title = "";
let date = null;
let content = "";




function Notes({ note }) {
  
  
  const navigate = useNavigate();
  const UpdateNote = (id, content1, title1, date1) => {
    noteid = id;
    title = title1;

    date = date1;
    content = content1;
    navigate("/updateNo");
  };

  
  const deleteNote = (id) => {
    axios.delete(`/delete/${note.id}`).then(
      (response) => {
        navigate("/home");
        alert("Note deleted");
      },
      (error) => {
        alert("Note not deleted");
      }
    );
  };

  return (
    <div>
      <Card
        className="my-3 border border-dark mx-auto"
        style={{ width: "40rem" }}
      >
        <CardBody>
          <CardSubtitle
            className="font-weight-bold text-center "
            style={{ fontSize: "30px" }}
          >
            {note.title}
          </CardSubtitle>
          <CardText>{note.content}</CardText>
          <CardFooter className="text-muted">
            Note Id: {note.id} <br></br>
            Date :{note.date}
            <Container className="text-center">
              <Button
                color="danger ml-3 "
                onClick={() => {
                  deleteNote();
                }}
              >
                Delete
              </Button>

              <Button
                color="warning ml-3 "
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  UpdateNote(note.id, note.content, note.title, note.date);
                }}
              >
                Update
              </Button>
            </Container>
          </CardFooter>
        </CardBody>
      </Card>
    </div>
  );
}

export default Notes;
export { noteid, content, date, title };
