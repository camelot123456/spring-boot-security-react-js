import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";

import { save, findOneById } from "../../../redux/actions/role-action";

function RoleCreatePage() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {idRole} = useParams()

  
  const role = useSelector(state => state.roleReducer.role)
  console.log(role)
  
  
  useEffect(() => {
    dispatch(findOneById(idRole));
    if (role) {
      setName(role.name)
      setCode(role.code)
    } 
  }, [idRole])
  

  const handleSaveRole = () => {
    dispatch(save({ name, code }));
    navigate("/roles");
  };

  return (
    <div className="vstack gap-2">
      <h1 className="my-4">This is Create Role New Page</h1>

      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
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
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>

      <div className="hstack gap-3">
        <button className="btn btn-primary" onClick={handleSaveRole}>
          Save
        </button>
        <button className="btn btn-danger">delete</button>
      </div>

      <Link to="/roles">Back To Role List</Link>

    </div>
  );
}

export default RoleCreatePage;
