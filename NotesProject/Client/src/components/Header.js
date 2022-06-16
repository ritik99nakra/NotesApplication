import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";




function Header() {
  let navigate = useNavigate();


  // Calling Logout Api in Node
  const logoutNode = () => {
    axios.get(`http://localhost:3001/logout`).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  
  // Removing tokens from local storage
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    logoutNode();
    navigate("/");
  };

  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">
          NoteMON
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                action
                to="/home"
                tag="a"
                className="nav-item nav-link active"
              >
                Home
              </Link>
            </li>

            <li class="nav-item">
              <Link
                action
                to="/addnotes"
                tag="a"
                className="nav-item nav-link active"
                style={{ marginLeft: "10px" }}
              >
                Add Notes
              </Link>
            </li>
            <li class="nav-item">
              <Link
                action
                to="/shownotes"
                tag="a"
                className="nav-item nav-link active"
                style={{ marginLeft: "10px" }}
              >
                Show Notes
              </Link>
            </li>
            <li class="nav-item">
              <Link
                action
                to="/profile"
                tag="a"
                className="nav-item nav-link active"
                style={{ marginLeft: "810px" }}
              >
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link
                action
                to="/"
                tag="a"
                onClick={logout}
                style={{ marginLeft: "20px" }}
                className="nav-item nav-link  active"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
