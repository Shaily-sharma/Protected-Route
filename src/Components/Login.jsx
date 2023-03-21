import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pwd, setPwd] = useState("");

  const handle = () => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Password", pwd);
    navigate("/home")
  };

  return (
    <>
      <div className="App">
        <div>
          <label htmlFor="Name"> UserName : </label>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            type="password"
            placeholder="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </div>
        {/* <div ontouchstart="">
            <button  className="button" onClick={handle}>Login</button>
         </div> */}
        {/* <div ontouchstart="">
          <div class="button" onClick={handle}>
            Login First
          </div>
        </div> */}
        <button onClick={handle} class="glow-on-hover" type="button">Login</button>
      </div>
    </>
  );
};
export default Login;
