import {API_URL} from '../constants/API';

export const START_TOPICS_REQUEST = 'START_TOPICS_REQUEST';
const startTopicsRequest = () =>
  ({
    type: START_TOPICS_REQUEST,
  });

export const TOPICS_REQUEST_SUCCESSFUL = 'TOPICS_REQUEST_SUCCESSFUL';
const topicsRequestSuccessful = json =>
  ({
    type: TOPICS_REQUEST_SUCCESSFUL,
    topics: json,
  });

export const fetchTopics = () => dispatch => {
  dispatch(startTopicsRequest());

  return fetch(`${API_URL}/topics`)
    .then(
      response => response.json(),
      error => console.log('An error occurred in FETCHTOPICS: ' + error),
    )
    .then(
      json => dispatch(topicsRequestSuccessful(json.data)),
      error => console.log('An error occurred in FETCHTOPICS: ' + error),
    );
}