import {
  START_LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILURE,
} from '../actions/login';

import {
  START_REGISTRATION,
  REGISTRATION_SUCCESSFUL,
  REGISTRATION_FAILURE
} from '../actions/register';

import {LOGOUT} from '../actions/logout';

const user = (
  state = {
    isLoggingIn: false,
    isLoggedIn: false,
    error: false,

    id: undefined,
    username: undefined,
    admin: false,
    accessToken: '',
  },
  action
) => {
  switch (action.type) {
    case START_LOGIN:
    case START_REGISTRATION:
      return {
        ...state,
        isLoggingIn: true,
        error: false,
      };

    case LOGIN_SUCCESSFUL:
    case REGISTRATION_SUCCESSFUL:
      return {
        isLoggingIn: false,
        isLoggedIn: true,
        error: false,

        id: action.user.id,
        username: action.user.attributes.username,
        admin: action.user.attributes.admin,
        accessToken: action.user.attributes.access_token,
      };

    case LOGIN_FAILURE:
    case REGISTRATION_FAILURE:
    case LOGOUT:
      return {
        isLoggingIn: false,
        isLoggedIn: false,
        error: true,

        id: undefined,
        username: undefined,
        admin: false,
        accessToken: '',
      };

    default:
      return state;
  }
}

export default user;