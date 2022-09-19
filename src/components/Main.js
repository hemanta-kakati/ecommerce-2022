import React from "react";
import { Link } from "react-router-dom";
import videoBG from "../assets/videoBG.mp4";

const Main = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBG} autoPlay loop muted></video>
      <div className="content">
        <Link className="btn px-4 btn-outline-primary" to="/home">
          Enter
        </Link>
      </div>
    </div>
  );
};

export default Main;
