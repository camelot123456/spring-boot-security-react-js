import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {Link} from 'react-router-dom'

import { findAll, findAllAndPaged } from "../../../redux/actions/role-action";
import RoleListComponent from "./RoleListComponent";
import PaginationCustom from "../../fragments/PaginationCustom";

const RolePage = () => {
  const roles = useSelector((state) => state.roleReducer.roles);
  const pageInfo = useSelector((state) => state.roleReducer.pageInfo);
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
      <Link className="btn btn-primary" to="/role/add">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </Link>
      <RoleListComponent roles={roles} />
      <PaginationCustom pageInfo={pageInfo} onChangePaged={handlePageInfo} />
    </>
  );
};

export default RolePage;
