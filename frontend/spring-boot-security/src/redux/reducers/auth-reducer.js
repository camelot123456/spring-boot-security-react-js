import authType from "../types/auth-types";

const initialState = {
  messages: null,
  authorization: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case authType.LOGIN_ACTION:
      return {
        ...state,
        messages: payload.message,
        authorization: payload.authorization,
      };
    case authType.LOGOUT_ACTION:
      return {
        ...state,
        messages: payload.message,
        authorization: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
