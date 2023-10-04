import React from "react";
import { Link } from "react-router-dom";
import image from "../technology-in-the-workplace.png";
import Login from "./Login";

export const Home = () => {
  return (
    <div>
      <img src={image} width={1250} height={550}></img>
    </div>
  );
};

export default Home;
