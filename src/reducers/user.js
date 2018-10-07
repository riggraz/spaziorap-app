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
  RESET_POST_SUBMISSION,
  START_POST_SUBMISSION,
  POST_SUBMISSION_SUCCESSFUL,
  POST_SUBMISSION_FAILURE,
} from '../actions/submitPost';

import {SELECT_POST_TYPE} from '../actions/selectPostType';

import {
  START_PROFILE_SCORE_REQUEST,
  PROFILE_SCORE_REQUEST_SUCCESSFUL,
  PROFILE_SCORE_REQUEST_FAILURE,
} from '../actions/requestProfileScore';

import {
  CHANGE_SELECTED_TOPIC,
  CHANGE_BODY,
  CHANGE_URL,
} from '../actions/changeNewPostForm';

import {
  START_VERIFY_ACCESS_TOKEN,
  VERIFY_ACCESS_TOKEN_SUCCESSFUL,
  VERIFY_ACCESS_TOKEN_GENERIC_FAILURE,
  VERIFY_ACCESS_TOKEN_UNAUTHORIZED_FAILURE,
} from '../actions/verifyAccessToken';

import {
  START_NOTIFICATIONS_REQUEST,
  NOTIFICATIONS_REQUEST_SUCCESSFUL,
  NOTIFICATIONS_REQUEST_FAILURE,
} from '../actions/requestNotifications';

import newPost from './newPost';
import notifications from './notifications';

const defaultState = {
  isLoggingIn: false,
  isLoggedIn: false,
  error: false,

  id: undefined,
  username: undefined,
  score: 0,
  visitedProfileScore: 0,
  admin: false,
  accessToken: '',

  newPost: newPost(undefined, {}),

  notifications: notifications(undefined, {}),
};

const user = (
  state = defaultState,
  action,
) => {
  switch (action.type) {
    case START_LOGIN:
    case START_REGISTRATION:
    case START_VERIFY_ACCESS_TOKEN:
      return {
        ...state,
        isLoggingIn: true,
        error: false,
      };

    case LOGIN_SUCCESSFUL:
    case REGISTRATION_SUCCESSFUL:
    case VERIFY_ACCESS_TOKEN_SUCCESSFUL:
      return {
        ...state,
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
    case VERIFY_ACCESS_TOKEN_GENERIC_FAILURE:
    case VERIFY_ACCESS_TOKEN_UNAUTHORIZED_FAILURE:
      return {
        ...defaultState,
        error: action.type,
      };

    case RESET_POST_SUBMISSION:
    case START_POST_SUBMISSION:
    case POST_SUBMISSION_SUCCESSFUL:
    case POST_SUBMISSION_FAILURE:

    case SELECT_POST_TYPE:

    case CHANGE_SELECTED_TOPIC:
    case CHANGE_BODY:
    case CHANGE_URL:
      return {
        ...state,
        newPost: newPost(state.newPost, action),
      };

    case LOGOUT:
      return defaultState;

    case START_NOTIFICATIONS_REQUEST:
    case NOTIFICATIONS_REQUEST_SUCCESSFUL:
    case NOTIFICATIONS_REQUEST_FAILURE:
      return {
        ...state,
        notifications: notifications(state.notifications, action),
      };

    case START_PROFILE_SCORE_REQUEST:
      return {
        ...state,
        score: action.userId == state.id ? '...' : state.score,
        visitedProfileScore: '...',
      };

    case PROFILE_SCORE_REQUEST_SUCCESSFUL:
      return {
        ...state,
        score: action.userId == state.id ? action.score : state.score,
        visitedProfileScore: action.score,
      };

    case PROFILE_SCORE_REQUEST_FAILURE:
      return {
        ...state,
        score: action.userId == state.id ? 'N/A' : state.score,
        visitedProfileScore: 'N/A',
      };

    default:
      return state;
  }
}

export default user;