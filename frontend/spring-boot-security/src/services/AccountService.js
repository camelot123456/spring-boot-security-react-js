import httpClient from "../http-common.js";

function findAll() {
  return httpClient.get(`/accounts`);
}

export default {findAll};
