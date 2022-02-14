import { URL_BASE, httpCommon } from "../common/http-common";

const findAll = () => {
  return httpCommon.get(`${URL_BASE}/roles`);
};

const findAllAndPaged = (params) => {
  return httpCommon.get(
    `${URL_BASE}/roles/page/${params.currentPage}?sizePage=${params.sizePage}&sortField=${params.sortField}&sortDir=${params.sortDir}&keyword=${params.keyword}`
  );
};

const findOneById = (idRole) => {
  return httpCommon.get(`${URL_BASE}/role/${idRole}`)
}

const save = (role) => {
  return httpCommon.post(`${URL_BASE}/role`, role)
}

const update = (role) => {
  return httpCommon.put(`${URL_BASE}/role`, role)
}

const deleteById = (idRole) => {
  return httpCommon.delete(`${URL_BASE}/role/${idRole}`)
}

export default { findAll , findAllAndPaged, findOneById, save, update, deleteById};
