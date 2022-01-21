import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RoleService from "../../../../../services/RoleService";

function RolesBody() {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    RoleService.findAll().then((resp) => setRoles(resp.data));
  };

  const handleDelete = (e, idRole) => {
    e.preventDefault();

    RoleService.destroy(idRole)
      .then((resp) => {
        if (resp.status === 204) {
          init();
          document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-success" role="alert">
                Successfully Deleted Role New!
            </div>`;
        }
      })
      .catch((err) => {
        document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err}
            </div>`;
      });
  };

  return (
    <div className="container">
      <h3>Role List</h3>
      <hr />
      <div id="alert-roles">{/* show alert */}</div>
      <Link to="/add" className="btn btn-primary">
        Add Role
      </Link>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">code</th>
            <th scope="col">Feature</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id}>
              <th scope="row">{index}</th>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.code}</td>
              <td>
                <Link to={`/role/${role.id}`} className="btn btn-outline-info">
                  Detail
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={(e) => handleDelete(e, role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RolesBody;
