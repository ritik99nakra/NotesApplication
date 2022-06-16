import React, { useEffect, useState } from 'react'
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
import { content, date, noteid, title } from './Notes';
import Header from './Header';
import { useNavigate } from 'react-router-dom';






function Update() {
     
  let navigate=useNavigate();
  useEffect(()=>{
    if(!(localStorage.getItem("token"))){
      navigate("/")
    }})
    const [notes, setNotes] = useState({});
    const handleForm = (e) => {
      e.preventDefault();
      console.log(notes);
      postdata(notes);
    };
    

    // Sending data to database
    const postdata = (data) => {
      axios.put(`/notes/${noteid}`,data).then(
        (response) => {
          alert("Note updated");
          navigate("/shownotes")
          
        },
        (error) => {
          alert("Note not updated");
        }
      );
    }
  
    return (
      <div>
        <Header/>
        <div style={{marginTop: "80px", marginLeft: "400px"}}>
             <Card id='user'style={{width:"700px", border:"5px solid"}} >
      <CardBody>       
           <CardTitle><h2 className='text-center'>Update Note</h2></CardTitle>       
       <br></br>
        <Form onSubmit={handleForm}>
          <Label for="name">Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Enter your title"
            type="text"
            defaultValue={title}
            onChange={(e) => {
              setNotes({ ...notes, title: e.target.value });
            }}
          ></Input>
  
          <Input
          hidden
            type="text"
            placeholder="Enter date like 1999-09-02"
            id="date"
            defaultValue={date}
            onChange={(e) => {
              setNotes({ ...notes, date: e.target.value });
            }}
          />
          <br/>
  
          <Label for="name">Content</Label>
          <Input
            id="content"
            name="content"
            placeholder="Enter your content"
            type="textarea"
            defaultValue={content}
            onChange={(e) => {
              setNotes({ ...notes, content: e.target.value });
            }}
          />
          <br />
          <Button type="submit" color="warning">
            update
          </Button>
        </Form>
        </CardBody>
        </Card>
        </div>
        </div>
    )}

export default Update;
