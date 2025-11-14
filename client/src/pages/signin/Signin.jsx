import React, { useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const onSignin = async () => {
    if (email.length == 0) {
      toast.warning("please enter email");
    } else if (password.length == 0) {
      toast.warning("please enter password");
    } else {
      const response = await signin(email, password);
      if (response["status"] == "success") {
        toast.success("Signin successful");
        localStorage.setItem("token", response["data"]["token"]);
        localStorage.setItem("firstName", response["data"]["firstName"]);
        localStorage.setItem("lastName", response["data"]["lastName"]);
        navigate("/Movie-list/Movie_list");
      } else {
        toast.error(response["error"]);
      }
    }
  };

  return (
    <div className="container">
      <h2 className="page-header">Signin</h2>

      <div className="Signin-container">
        <div className="mb-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input type="checkbox" className="me-2" />
          <label htmlFor="">Remember me</label>
        </div>
        <div className="mb-3">
          Don't have an account yet? <Link to="/signup">Register here</Link>
        </div>
        <div className="mb-3">
          <button onClick={onSignin} className="btn btn-success">
            Signin
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signin;
