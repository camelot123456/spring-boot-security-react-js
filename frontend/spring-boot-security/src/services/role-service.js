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

export default { findAll , findAllAndPaged, findOneById, save};
