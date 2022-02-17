import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { doLogin } from "../../../redux/actions/auth-action";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleLoginForm = (e) => {
    e.preventDefault();
    console.log({ username, password })
    dispatch(doLogin({ username, password }));
  };

  return (
    <div className="bg-primary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputEmail"
                            type="text"
                            placeholder="username"
                            onChange={(e) => setUsername(e.target.value)}
                          />
                          <label htmlFor="inputEmail">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            id="inputPassword"
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <label htmlFor="inputPassword">Password</label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="inputRememberPassword"
                          >
                            Remember Password
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <a className="small" href="password.html">
                            Forgot Password?
                          </a>
                          <button
                            className="btn btn-primary"
                            onClick={(e) => handleLoginForm(e)}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <a href="register.html">Need an account? Sign up!</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
