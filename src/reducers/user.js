import {
  START_LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILURE,
} from '../actions/login';

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
      return {
        ...state,
        isLoggingIn: true
      };

    case LOGIN_SUCCESSFUL:
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