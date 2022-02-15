import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch , useSelector} from "react-redux";

import { setFlagAction, deleteById, setActiveId, findAllAndPaged } from "../../../redux/actions/role-action";
import ModalCustom from "../../fragments/ModalCustom";

function RoleListComponent(props) {
  const { roles } = props;
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleModalClose = () => setShow(false);
  const handleModalShow = () => setShow(true);

  const idRole = useSelector((state) => state.roleReducer.activeId);

  const handleDeleteById = () => {
    if(idRole) {
      dispatch(deleteById(idRole))
      dispatch(findAllAndPaged())
      handleModalClose()
    }
  };

  const handleBtnDelete = (idRole) => {
    dispatch(setActiveId(idRole));
    handleModalShow()
  }

  return (
    <>
      <table className="table  table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Code</th>
            <th scope="col">Tools</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((role, index) => (
            <tr key={role.id}>
              <th scope="row">{index + 1}</th>
              <td>{role.id}</td>
              <td>{role.name}</td>
              <td>{role.code}</td>
              <td className="text-center">
                <Link
                  style={{ minWidth: "30px" }}
                  className="btn btn-info btn-sm me-2"
                  to={`/role/${role.id}`}
                  onClick={() => {
                    dispatch(setFlagAction("update"));
                  }}
                >
                  <i className="fa fa-info" aria-hidden="true"></i>
                </Link>
                <button
                  style={{ minWidth: "30px" }}
                  className="btn btn-danger btn-sm"
                  onClick={() => handleBtnDelete(role.id)}
                >
                  <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalCustom
        show={show}
        title="Delete Role"
        body="Do you want delete role ?"
        nameBtnNegative="Delete"
        nameBtnPositive="Close"
        colorBtnNegative="danger"
        colorBtnPositive="secondary"
        onBtnPositive={handleModalClose}
        onBtnNegative={handleDeleteById}
      />
    </>
  );
}

export default RoleListComponent;
