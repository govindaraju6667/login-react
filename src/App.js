import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { useState } from "react";
import About from "./About";
import { Navbar } from "./Navbar";

function App() {
  const [data, setData] = useState([]);
  // console.log(data);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/register"
            element={<Register data={data} setData={setData} />}
          />
          <Route path="/login" element={<Login data={data} />} />

          <Route path="home" element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Navbar" element={<Navbar />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
