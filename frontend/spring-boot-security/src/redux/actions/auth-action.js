import authType from "../types/auth-types";
import authService from "../../services/auth-service";

export const doLogin = (authForm) => async (dispatch) => {
  try {
    const authPromise = await authService.doLogin(authForm);
    console.log(authPromise)
    authPromise.then(resp => {
      console.log(resp.headers)
    })

    dispatch({
      type: authType.LOGIN_ACTION,
      payload: {
          message: "Login Successfully",
          authorization: authPromise.headers['Authorization']
      }
    });
  } catch (error) {
    // dispatch({
    //   type: authType.ERROR_ACTION,
    //   payload: {
    //       message: error.message
    //   }
    // });
  }
};

export const doLogout = () => async (dispatch) => {
  try {
    await authService.doLogout();

    dispatch({
      type: authType.LOGOUT_ACTION,
      payload: {
          message: "Logout successfully"
      },
    });
  } catch (error) {
    dispatch({
      type: authType.ERROR_ACTION,
      payload: {
          message: error.message
      },
    });
  }
};
