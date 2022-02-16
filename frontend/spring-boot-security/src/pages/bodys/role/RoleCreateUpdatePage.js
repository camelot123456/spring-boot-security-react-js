import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { save, update, deleteById } from "../../../redux/actions/role-action";
import roleService from "../../../services/role-service";
import AlertCustom from "../../fragments/AlertCustom";
import ModalCustom from "../../fragments/ModalCustom";

function RoleCreateUpdatePage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { idRole } = useParams();

  const flagAction = useSelector((state) => state.roleReducer.flagAction);
  const message = useSelector((state) => state.roleReducer.message);

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  useEffect(async () => {
    const rolePromise = await roleService.findOneById(idRole);
    setName(rolePromise.data.name);
    setCode(rolePromise.data.code);
  }, [idRole]);

  const handleSaveRole = () => {
    dispatch(save({ name, code }));
    navigate("/roles");
  };

  const handleUpdateRole = () => {
    dispatch(update({ id: idRole, name, code }));
  };

  const handleDeleteRole = () => {
    dispatch(deleteById(idRole));
    navigate("/roles");
  };

  return (
    <div className="vstack gap-2">
      <h1 className="my-4">This is Create Role New Page</h1>

      {message ?
        <AlertCustom
          alertState={message.alertState}
          alertBody={message.alertBody}
        /> : ''
      }

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name || ""}
          autoFocus
        />
      </div>

      <div className="mb-3">
        <label htmlFor="code" className="form-label">
          Code
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="code"
          value={code || ""}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className="hstack gap-3">
        {flagAction === "insert" ? (
          <button className="btn btn-primary" onClick={handleSaveRole}>
            Create
          </button>
        ) : (
          <>
            <button className="btn btn-danger" onClick={handleModalShow}>
              delete
            </button>
            <button className="btn btn-success" onClick={handleUpdateRole}>
              Save
            </button>
          </>
        )}
      </div>

      <Link to="/roles">Back To Role List</Link>

      <ModalCustom
        show={show}
        title="Delete Role"
        body="Do you want delete role ?"
        nameBtnNegative="Delete"
        nameBtnPositive="Close"
        colorBtnNegative="danger"
        colorBtnPositive="secondary"
        onBtnPositive={handleModalClose}
        onBtnNegative={handleDeleteRole}
      />
    </div>
  );
}

export default RoleCreateUpdatePage;
