import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";

const Register = ({ data, setData }) => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [number, setNumber] = useState("");
  // const [store, setStore] = useState([]);
  // const{name,pass,number}=data

  const navigate = useNavigate();

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const regex = /^[A-Za-z]\\w{5, 29}$/;

  const PhoneNumberRegex = /^\+?[1-9][0-9]{7,14}$/;

  let result = regex.test(name);
  let passing = passwordRegex.test(pass);
  let mobNumber = PhoneNumberRegex.test(number);

  const handleClick = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      pass: pass,
      number: number,
    };

    if (name === "" || pass === "" || number === "") {
      alert("Fill the empty input fields");
    } else if (!result && !passing && !mobNumber) {
      alert("Your input doesn't match our requirements");
    } else {
      alert("Your email is valid && Password strength is good!");
      setData([...data, formData]);
      console.log(formData);
      setName("");
      setPass("");
      setNumber("");
      alert("Register succesfully");

      navigate("/Login");
    }
  };

  return (
    <div id="regn-form">
      <form>
        <p id="regn-head">Create New Account</p>
        <br />
        <input
          type="text"
          id="inputfield"
          placeholder="username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="password"
          id="inputfield"
          placeholder="new password"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="number"
          id="inputfield"
          placeholder="mobilenumber"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <br />
        <input
          type="button"
          value="sign up"
          id="signup-btn"
          // onClick={() => signup(name, pass, number)}
          onClick={handleClick}
        ></input>
        <br />
        {/* <p id="already">Already have an account?</p> */}
        <Link to="/Login" id="already">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
