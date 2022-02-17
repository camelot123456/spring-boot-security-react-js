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
        message: payload.message,
        authorization: payload.authorization
      };
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
