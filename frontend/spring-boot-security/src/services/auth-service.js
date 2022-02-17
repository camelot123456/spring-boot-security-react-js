import { URL_BASE,httpCommon} from "../common/http-common";

const doLogin = (authForm) => {
    return httpCommon.post(`${URL_BASE}/login`, authForm)
}

const doLogout = () => {
    return httpCommon.post(`http://localhost:8081/logout`, {
        headers: {
            "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        }
    })
}

export default {doLogin, doLogout}