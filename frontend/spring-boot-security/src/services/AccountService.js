import httpClient from "../commons/http-common.js";

function findAll() {
  return httpClient.get(`/accounts`);
}

export default {findAll};
