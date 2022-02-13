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
