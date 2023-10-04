import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div class="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Login">Login</Link>
    </div>
  );
};
