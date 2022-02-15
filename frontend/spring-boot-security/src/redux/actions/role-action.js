import roleType from "../types/role-type";
import roleService from "../../services/role-service";

export const findAll = () => async (dispatch) => {
  try {
    const rolePromise = await roleService.findAll();

    dispatch({
      type: roleType.FIND_ALL,
      payload: rolePromise.data,
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: error,
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
      payload: rolePromise.data,
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: error,
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
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      message: error,
    });
  }
};

export const deleteById = (idRole) => async (dispatch) => {
  try {
    await roleService.deleteById(idRole);

    dispatch({
      type: roleType.DELETE
    })
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      patload: error
    })
  }
}

export const setFlagAction = (state) => async (dispatch) => {
  try {
    dispatch({
      type: roleType.SET_FLAG_ACTION,
      payload: state,
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: error,
    });
  }
};

export const setActiveId = (idRole) => async (dispatch) => {
  try {
    dispatch({
      type: roleType.SET_ACTIVE_ID,
      payload: idRole,
    });
  } catch (error) {
    dispatch({
      type: roleType.ERROR,
      payload: error,
    });
  }
};
