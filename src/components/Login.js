import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// let obj;
// let isTrue = { bool: false };
const Login = ({ data }) => {
  const [set, setName] = useState("");
  const [pass, setPass] = useState("");
  // const [check, setCheck] = useState([]);

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    const matchUser = data.find(
      (user) => user.name === set && user.pass === pass
    );
    if (matchUser) {
      console.log(matchUser);
      alert("login successfull");
      navigate("/Home");
    } else {
      alert("invalid username & password");
      navigate("/Register");
    }
    console.log(matchUser);
  };

  // function Submitting(set, pass) {
  //   if (set.length > 0 && pass.length > 0) {
  //     setCheck([...check, { set, pass }]);
  //     isTrue["bool"] = true;
  //   } // }
  //   // setCheck([...check, { set, pass }]);
  //   setName(" ");
  //   setPass(" ");
  // }
  // if (isTrue["bool"]) {
  //   console.log(check);
  // }

  return (
    <div id="login-form">
      <p id="log-head">Log in</p>
      <form>
        <input
          type="text"
          placeholder="Enter Name"
          id="inputbox"
          value={set}
          onChange={(e) => setName(e.target.value)}
        ></input>

        <br />

        <input
          type="text    "
          placeholder="Password"
          id="inputbox"
          value={pass}
          onChange={(e) => setPass(e.target.value)}
        ></input>

        <br />
        <input
          type="button"
          value="Login"
          id="login-btn"
          // onClick={() => Submitting(set, pass)}
          onClick={(e) => handleClick(e)}
        ></input>
        <br />
        <Link to="/Register" type="button">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
