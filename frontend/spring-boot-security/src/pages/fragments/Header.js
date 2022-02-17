import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { doLogout } from "../../redux/actions/auth-action";

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(doLogout());
    navigate('/login')
  };

  return (
    <ul className="nav bg-light shadow">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/home">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/accounts">
          Account
        </Link>
      </li>
      <li className="nav-item me-auto">
        <Link className="nav-link" to="/roles">
          Role
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link cursor" role="button" onClick={handleLogout}>
          Logout
        </a>
      </li>
    </ul>
  );
}

export default Header;
