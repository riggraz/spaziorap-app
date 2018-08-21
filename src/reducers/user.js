import {
  START_LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILURE,
} from '../actions/login';

import {
  START_REGISTRATION,
  REGISTRATION_SUCCESSFUL,
  REGISTRATION_FAILURE,
} from '../actions/register';

import {LOGOUT} from '../actions/logout';

import {
  START_POST_SUBMISSION,
  POST_SUBMISSION_SUCCESSFUL,
  POST_SUBMISSION_FAILURE,
} from '../actions/submitPost';

import {
  START_PROFILE_SCORE_REQUEST,
  PROFILE_SCORE_REQUEST_SUCCESSFUL,
  PROFILE_SCORE_REQUEST_FAILURE,
} from '../actions/requestProfileScore';

import newPost from './newPost';

const user = (
  state = {
    isLoggingIn: false,
    isLoggedIn: false,
    error: false,

    id: undefined,
    username: undefined,
    score: 0,
    admin: false,
    accessToken: '',

    newPost: {},
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
        score: state.score,
        admin: action.user.attributes.admin,
        accessToken: action.user.attributes.access_token,

        newPost: {},
      };

    case LOGIN_FAILURE:
    case REGISTRATION_FAILURE:
      return {
        isLoggingIn: false,
        isLoggedIn: false,
        error: true,

        id: undefined,
        username: undefined,
        score: 0,
        admin: false,
        accessToken: '',

        newPost: {},
      };

    case START_POST_SUBMISSION:
    case POST_SUBMISSION_SUCCESSFUL:
    case POST_SUBMISSION_FAILURE:
      return {
        ...state,
        newPost: newPost(state.newPost, action),
      };

    case LOGOUT:
      return {
        isLoggingIn: false,
        isLoggedIn: false,
        error: false,

        id: undefined,
        username: undefined,
        score: 0,
        admin: false,
        accessToken: '',

        newPost: {},
      };

    case START_PROFILE_SCORE_REQUEST:
      return {
        ...state,
        score: '...',
      };

    case PROFILE_SCORE_REQUEST_SUCCESSFUL:
      return {
        ...state,
        score: action.score,
      };

    case PROFILE_SCORE_REQUEST_FAILURE:
      return {
        ...state,
        score: 'N/A',
      };

    default:
      return state;
  }
}

export default user;