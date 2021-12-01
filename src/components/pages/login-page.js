import React from "react";
import { Navigate } from "react-router";

const LoginPage = ({ isLoggedIn, onLogin }) => {
  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <div className="jumbotron">
      <p>Login to see the secret page!</p>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
