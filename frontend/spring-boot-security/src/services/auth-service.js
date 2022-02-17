import { URL_BASE,httpCommon} from "../common/http-common";

const doLogin = (authForm) => {
    return httpCommon.post(`${URL_BASE}/login`, authForm)
}

const doLogout = () => {
    return httpCommon.post(`${URL_BASE}/logout`)
}

export default {doLogin, doLogout}