import {deleteValueByKey} from "../config/localStorage";

export const LOGOUT = 'LOGOUT';
const logoutUser = () =>
  ({
    type: LOGOUT,
  });

export const logout = () => dispatch => {
  deleteValueByKey('accessToken');
  dispatch(logoutUser());
}