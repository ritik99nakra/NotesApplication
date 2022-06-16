import React, { useEffect, useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import Header from "./Header";
import { Navigate, useNavigate } from "react-router-dom";



function Allnotes() {
  useEffect(() => {
    getAllNotes();
  }, []);

  let navigate = useNavigate();
  useEffect(() => {
    // Chechking token
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  const [notes, setNotes] = useState([]);
  const uid = localStorage.getItem("id");

  // fetching all the data from database
  const getAllNotes = () => {
    axios.get(`/notes/${uid}`).then(
      (response) => {
        console.log(response.data);
        setNotes(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <Header />
      <div style={{ marginTop: "30px" }}>
        {notes.length > 0
          ? notes.map((item) => <Notes note={item} />)
          : "No Notes Available"}
      </div>
    </>
  );
}

export default Allnotes;
