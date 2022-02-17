import authType from "../types/auth-types";
import authService from "../../services/auth-service";

export const doLogin = (authForm) => async (dispatch) => {
  try {
    const authPromise = await authService.doLogin(authForm);
    localStorage.setItem("accessToken", authPromise.data.accessToken);

    dispatch({
      type: authType.LOGIN_ACTION,
      payload: {
        message: "Login Successfully",
        authorization: authPromise.data.accessToken,
      },
    });
  } catch (error) {
    dispatch({
      type: authType.ERROR_ACTION,
      payload: {
        message: error.message,
      },
    });
  }
};

export const doLogout = () => {
  localStorage.removeItem("accessToken");
  return {
    type: authType.LOGOUT_ACTION,
    payload: {
      message: "Logout successfully",
    },
  };
};
