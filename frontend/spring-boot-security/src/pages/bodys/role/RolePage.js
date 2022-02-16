import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import {
  findAllAndPaged,
  setFlagAction,
} from "../../../redux/actions/role-action";
import RoleListComponent from "./RoleListComponent";
import PaginationCustom from "../../fragments/PaginationCustom";
import AlertCustom from "../../fragments/AlertCustom";

const RolePage = () => {
  const roles = useSelector((state) => state.roleReducer.roles);
  const pageInfo = useSelector((state) => state.roleReducer.pageInfo);
  const message = useSelector((state) => state.roleReducer.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findAllAndPaged());
  }, []);

  const handlePageInfo = (params) => {
    dispatch(findAllAndPaged(params));
  };

  return (
    <>
      <h1 className="my-4">This is Role Page</h1>
      {message ? (
        <AlertCustom
          alertState={message.alertState}
          alertBody={message.alertBody}
        />
      ) : ''}

      <div className="d-flex justify-content-between">
        <Link
          className="btn btn-primary"
          to="/role/add"
          onClick={() => dispatch(setFlagAction("insert"))}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </Link>
      </div>

      <RoleListComponent roles={roles} />
      <PaginationCustom pageInfo={pageInfo} onChangePaged={handlePageInfo} />
    </>
  );
};

export default RolePage;
