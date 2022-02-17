import roleType from "../types/role-type";

const initialState = {
  pageInfo: {},
  roles: [],
  role: null,
  message: null,
  activeId: null,
  flagAction: null,
};

const roleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case roleType.FIND_ALL:
      return {
        ...state,
        roles: payload.roles.roles,
        pageInfo: payload.roles.paged,
      };

    case roleType.FIND_ALL_AND_PAGED:
      return {
        ...state,
        roles: payload.roles.roles,
        pageInfo: payload.roles.paged,
      };

    case roleType.FIND_ONE_BY_ID:
      return {
        ...state,
        role: payload,
      };

    case roleType.SET_FLAG_ACTION:
      return {
        ...state,
        flagAction: payload,
      };

    case roleType.SET_ACTIVE_ID:
      return {
        ...state,
        activeId: payload,
      };

    case roleType.SAVE:
      return {
        ...state,
        message: payload
      };

    case roleType.UPDATE:
      return {
        ...state,
        message: payload,
      };

    case roleType.DELETE:
      return {
        ...state,
        activeId: null,
        message: payload,
      };

    case roleType.ERROR:
      return {
        ...state,
        roles: [],
        pageInfo: {},
        message: payload.message
      };

    case roleType.REMOVE_MESSAGE:
      return {
        ...state,
        message: null
      }
    default:
      return state;
  }
};

export default roleReducer;
