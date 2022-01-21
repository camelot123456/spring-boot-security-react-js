import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";

import RoleService from "../../../../../services/RoleService";

var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

function RolesBody() {
  const [roles, setRoles] = useState([]);
  const [idRole, setIdRole] = useState("");
  const [showModalRole, setShowModalRole] = useState(false);
  const [showModalRoles, setShowModalRoles] = useState(false);
  const [showBtnDel, setShowBtnDel] = useState(false);

  const handleClose = () => {
    setShowModalRoles(false);
    setShowModalRole(false);
  }
  const handleShow = (idRole) => {
    setShowModalRole(true);
    setIdRole(idRole);
  };

  useEffect(() => {
    var checkboxAll = $("#checkbox-all");
    var checkboxElement = Array.from($$(".checkbox-element"));
    var countCheckboxElement = Array.from($$(".checkbox-element")).length;

    const handleShowBtnDelete = () => {
      if (Array.from($$(".th-role input[type=checkbox]:checked")).length > 0) {
        setShowBtnDel(true);
      } else setShowBtnDel(false);
    };

    checkboxAll.addEventListener("change", (e) => {
      var isCheckboxAll = checkboxAll.checked;
      checkboxElement.forEach((element) => {
        element.checked = isCheckboxAll;
      });
      handleShowBtnDelete();
    });

    checkboxElement.forEach((element) => {
      element.addEventListener("change", (e) => {
        var checkboxElementPresent = Array.from(
          $$(".th-role input[type=checkbox]:checked")
        ).length;
        checkboxAll.checked =
          checkboxElementPresent === countCheckboxElement ? true : false;
        handleShowBtnDelete();
      });
    });
  });

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
        if (resp.status === 200) {
          setShowModalRole(false);
          init();
          document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-success" role="alert">
                Successfully Deleted Role New!
            </div>`;
        }
      })
      .catch((err) => {
        setShowModalRole(false);
        document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-danger" role="alert">
                ${err}
            </div>`;
      });
  };

  const handleBtnDelMany = () => {
    var ids = [];
    Array.from($$(".th-role input[type=checkbox]:checked")).forEach((element) =>
      ids.push(element.id)
    );
    const data = {ids}
    RoleService.destroyMany({data})
      .then((resp) => {
        if (resp.status === 200) {
          setShowModalRoles(false)
          init()
          document.getElementById("alert-roles").innerHTML = `
            <div class="alert alert-success" role="alert">
                Successfully Deleted Role New!
            </div>`;
        }
      })
      .catch((err) => {
        setShowModalRoles(false)
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
      <Link to="/add" className="btn btn-primary me-3">
        Add Role
      </Link>
      {showBtnDel && (
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => setShowModalRoles(true)}
        >
          Danger
        </button>
      )}
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">
              <input
                className="form-check-input"
                type="checkbox"
                id="checkbox-all"
              />
            </th>
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
              <th className="th-role">
                <input
                  className="form-check-input checkbox-element"
                  type="checkbox"
                  id={role.id}
                />
              </th>
              <th scope="row">{index + 1}</th>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.code}</td>
              <td>
                <Link
                  to={`/role/${role.id}`}
                  className="btn btn-outline-info me-3"
                >
                  Detail
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleShow(role.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal confirm delete role */}
      <Modal
        show={showModalRole}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want delete this role ?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => handleDelete(e, idRole)}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>

      {/* Modal confirm delete roles */}
      <Modal
        show={showModalRoles}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want delete this roles ?</Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleClose}>
            Close
          </button>
          <button
            className="btn btn-danger"
            onClick={(e) => handleBtnDelMany()}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default RolesBody;
