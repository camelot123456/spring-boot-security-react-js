import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import RoleService from "../../../../../services/RoleService";

function RoleInsert() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  let navigation = useNavigate();
  let { idRole } = useParams();

  const handleSaveOrUpdate = (e) => {
    e.preventDefault();

    const role = { name, code, id: idRole };

    if (idRole) {
      RoleService.update(role)
        .then((resp) => {
          if (resp.status === 200) {
            navigation(`/role/${idRole}`);
            document.getElementById("alert-role").innerHTML = `
            <div class="alert alert-success" role="alert">
                Successfully Updated Role!
            </div>`;
          }
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("alert-role").innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err}
            </div>`;
        });
    } else {
      RoleService.save(role)
        .then((resp) => {
          if (resp.status === 200) {
            navigation("/roles");
            document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-success" role="alert">
                Successfully Created Role New!
            </div>`;
          }
        })
        .catch((err) => {
          document.getElementById("alert-role").innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err}
            </div>`;
        });
    }
  };

  useEffect(() => {
    RoleService.findOneById(idRole).then((resp) => {
      setName(resp.data.name);
      setCode(resp.data.code);
    });
  }, [idRole]);

  return (
    <div className="container">
      <h3>Create New Role</h3>
      <hr />
      <div id="alert-role">{/* show alert */}</div>
      <div className="vstack gap-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Role name"
            onChange={(e) => setName(e.target.value)}
            value={name || ''}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="code" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="code"
            placeholder="Role code"
            onChange={(e) => setCode(e.target.value)}
            value={code || ''}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={(e) => handleSaveOrUpdate(e)}
        >
          Save
        </button>
      </div>
      <hr />
      <Link to="/roles" className="btn btn-link">
        Back to roles
      </Link>
    </div>
  );
}

export default RoleInsert;
