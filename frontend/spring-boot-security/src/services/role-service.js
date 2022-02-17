import { URL_BASE, httpCommon } from "../common/http-common";

const findAll = () => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.get(`${URL_BASE}/roles`);
};

const findAllAndPaged = (params) => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.get(
    `${URL_BASE}/roles/page/${params.currentPage}?sizePage=${params.sizePage}&sortField=${params.sortField}&sortDir=${params.sortDir}&keyword=${params.keyword}`
  );
};

const findOneById = (idRole) => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.get(`${URL_BASE}/role/${idRole}`);
};

const save = (role) => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.post(`${URL_BASE}/role`, role);
};

const update = (role) => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.put(`${URL_BASE}/role`, role);
};

const deleteById = (idRole) => {
  httpCommon.defaults.headers.common["Authorization"] = localStorage.getItem("accessToken");
  return httpCommon.delete(`${URL_BASE}/role/${idRole}`);
};

export default {
  findAll,
  findAllAndPaged,
  findOneById,
  save,
  update,
  deleteById,
};
