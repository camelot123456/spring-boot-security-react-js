import React from "react";
import {Link, Route, Routes} from 'react-router-dom'

function Header() {
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
    </ul>
  );
}

export default Header;
