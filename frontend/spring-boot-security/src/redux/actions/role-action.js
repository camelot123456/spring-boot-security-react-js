import roleType from "../types/role-type";
import roleService from "../../services/role-service";

export const findAll = () => async (dispatch) => {
  try {
    const rolePromise = await roleService.findAll();

    dispatch({
      type: roleType.FIND_ALL,
      payload: {
        roles: rolePromise.data,
        messages: null
      }
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: {
        message: error.message,
        roles: []
      },
    });
  }
};

export const findAllAndPaged = (params) => async (dispatch) => {
  try {
    const rolePromise =
      params === undefined
        ? await roleService.findAll()
        : await roleService.findAllAndPaged(params);

    dispatch({
      type: roleType.FIND_ALL_AND_PAGED,
      payload: {
        roles: rolePromise.data,
        messages: null
      }
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: {
        message: error.message,
        roles: []
      },
    });
  }
};

export const findOneById = (idRole) => async (dispatch) => {
  try {
    const rolePromise = await roleService.findOneById(idRole);
    dispatch({
      type: roleType.FIND_ONE_BY_ID,
      payload: rolePromise.data,
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: error,
    });
  }
};

export const save = (role) => async (dispatch) => {
  try {
    await roleService.save(role);

    dispatch({
      type: roleType.SAVE,
      payload: {
        alertState: "success",
        alertBody: "Created Successfully",
      },
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      message: error,
    });
  }
};

export const update = (role) => async (dispatch) => {
  try {
    await roleService.update(role);

    dispatch({
      type: roleType.UPDATE,
      payload: {
        alertState: "success",
        alertBody: "Updated Successfully",
      },
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: {
        alertState: "danger",
        alertBody: error.message,
      },
    });
  }
};

export const deleteById = (idRole) => async (dispatch) => {
  try {
    await roleService.deleteById(idRole);

    dispatch({
      type: roleType.DELETE,
      payload: {
        alertState: "success",
        alertBody: "Deleted Successfully",
      },
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: {
        alertState: "danger",
        alertBody: error.message,
      },
    });
  }
};

export const setFlagAction = (state) => {
  return {
    type: roleType.SET_FLAG_ACTION,
    payload: state,
  };
};

export const setActiveId = (idRole) => {
  return {
    type: roleType.SET_ACTIVE_ID,
    payload: idRole,
  };
};

export const removeMessage = () => {
  return {
    type: roleType.REMOVE_MESSAGE,
  };
};
