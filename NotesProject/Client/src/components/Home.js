import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import Header from "./Header";
import image1 from "../images/notes1.jpg";


function Home() {
  let navigate = useNavigate();
  useEffect(() =>
    axios
      .get("http://localhost:3001/home", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      })
      .then((response) => {
        let s = response.data;

        console.log(s);
        if (s == "great work ") {
          console.log(response.data + " ....s");
        } else {
          console.log(response.data.message);

          navigate("/");
          alert(response.data.message + "\n Go to login page");
        }
      })
  );

  const handler = () => {
    navigate("/addnotes");
  };

  return (
    <>
      <Header />
      <div>
        <img
          src={image1}
          style={{
            maxWidth: "800px",
            height: "450px",
            marginTop: "60px",
            marginLeft: "25%",
          }}
        ></img>
      </div>
      <div class="card-footer text-center">
        <Button color="primary" onClick={handler}>
          Start here
        </Button>
      </div>
    </>
  );
}

export default Home;
