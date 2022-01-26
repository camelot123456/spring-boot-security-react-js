import httpCommon from "../commons/http-common";

function findAll() {
  return httpCommon.get(`/roles`);
}

function findAllAndPagination(params) {
  return httpCommon.get(`/roles/page/${params.currentPage}?sizePage=${params.sizePage}&sortField=${params.sortFiled}&sortDir=${params.sortDir}&keyword=${params.keyword}`);
}

function findOneById(idRole) {
    return httpCommon.get(`/role/${idRole}`)
}

function save(role) {
  return httpCommon.post(`/role`, role);
}

function update(role) {
    return httpCommon.put(`/role`, role)
}

function destroy(idRole) {
  return httpCommon.delete(`/role/${idRole}`)
}

function destroyMany(ids) {
  return httpCommon.delete(`/role`, ids)
}

export default { findAll, findAllAndPagination, findOneById, save, update, destroy, destroyMany};
