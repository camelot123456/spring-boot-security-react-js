import httpCommon from "../commons/http-common";

function findAll() {
  return httpCommon.get(`/roles`);
}

function save(role) {
  return httpCommon.post(`/role`, role);
}

function findOneById(idRole) {
    return httpCommon.get(`/role/${idRole}`)
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

export default { findAll, save, findOneById, update, destroy, destroyMany};
