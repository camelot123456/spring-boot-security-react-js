import { Routes, Route, Link } from "react-router-dom";
import Account from '../bodys/Account.js';
import Role from "../bodys/Role.js";

function Web() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/web/accounts">
          Accounts
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/web/roles">
          Roles
        </Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>

      <Routes>
          <Route path="/web/accounts" element={<Account/>}></Route>
          <Route path="/web/roles" element={<Role/>}></Route>
      </Routes>

    </ul>
  );
}

export default Web;
