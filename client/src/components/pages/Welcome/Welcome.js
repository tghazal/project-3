import React from "react";
import "./Welcome.css";

const Welcome = (props) => {
  return (
    <div className="container-fluid flex-grow-1 d-flex flex-column">
      <div className="row flex-grow-1">
        <div className="col p-0 col-style d-flex flex-column align-items-center justify-content-around text-center">
          <h1 className="title display-1 font-weight-bold outline">
            <strong>Need Help?</strong>
          </h1>
          <div>
            <a className="btn btn-clear btn-lg btn-min-block mt-2 welcome-buttons-bg outline-sm" href="/login" style={{ fontSize: '1.6rem' }}>
              <strong>Login</strong>
            </a>
            <a className="btn btn-clear btn-lg btn-min-block mt-2"
              href="/register" style={{ fontSize: '1.6rem' }}>
              <strong>Register</strong>
            </a>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
}

export default Welcome;


