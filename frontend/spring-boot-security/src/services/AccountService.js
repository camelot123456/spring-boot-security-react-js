import axios from "axios";

const URL_BASE = "http://localhost:8081/api";

class AccountSerive {
  findAll() {
    return axios.get(`${URL_BASE}/accounts`);
  }

  test(acc) {
    return axios.post(`${URL_BASE}/test`, acc);
  }

  send(acc) {
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    // headers.append(
    //   "Authorization",
    //   "Basic " + base64.encode(username + ":" + password)
    // );
    headers.append("Origin", "http://localhost:3000");

    fetch(`${URL_BASE}/login`, {
      mode: "cors",
      credentials: "include",
      method: "POST",
      body: JSON.stringify(acc),
      headers: headers,
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }
}

export default new AccountSerive();
