import React from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div
      className="position-relative  text-bg-light p-3"
      style={{ width: "400px", margin: "50px auto" }}
    >
      <h1>Login</h1>
      <form>
        <label className="block">Email</label>
        <input
          className="form-control"
          type="text"
          placeholder="Email..."
          required
        />
        <label className="block">Password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Password..."
        />
        <br />
        <button
          className="text-light bg-dark"
          onClick={() => navigate("/home")}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
