import roleType from "../types/role-type";

const initialState = {
  pageInfo: {},
  roles: [],
  role: null,
  message: null,
  activeId: null,
};

const roleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case roleType.FIND_ALL:
      return {
        ...state,
        roles: payload.roles,
        pageInfo: payload.paged,
      };

    case roleType.FIND_ALL_AND_PAGED:
      return {
        ...state,
        roles: payload.roles,
        pageInfo: payload.paged,
      };

    case roleType.FIND_ONE_BY_ID:
      return {
        ...state,
        role: payload,
      };

    case roleType.SAVE:
      console.log("save");
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default roleReducer;
