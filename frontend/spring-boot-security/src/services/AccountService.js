import axios from "axios";

const URL_BASE = "http://localhost:8081/api";

class AccountSerive {
  findAll() {
    return axios.get(`${URL_BASE}/accounts`, {
      headers: {
        "Authorization": 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhY2MyIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9hcGkvbG9naW4iLCJleHAiOjE2NDM4MjEyMDAsImlhdCI6MTY0MjYxODc1MH0.qAkGu__DYOJrsyRbYbWCG8nikx28EKamC5_JqcpVd70'
      }
    });
  }

  test(acc) {
    return axios.post(`${URL_BASE}/login`, acc);
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
