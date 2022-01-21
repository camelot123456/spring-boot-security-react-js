import httpCommon from "../http-common";

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

export default { findAll, save, findOneById, update, destroy};
