import {API_URL} from '../constants/API';
import {LATEST_POSTS} from '../constants/navigation';

import {fetchLatestPosts} from './requestLatestPosts';

export const START_POST_SUBMISSION = 'START_POST_SUBMISSION';
const startPostSubmission = () =>
  ({
    type: START_POST_SUBMISSION,
  });

export const POST_SUBMISSION_SUCCESSFUL = 'POST_SUBMISSION_SUCCESSFUL';
const postSubmissionSuccessful = post =>
  ({
    type: POST_SUBMISSION_SUCCESSFUL,
    post: post.data,
  });

export const POST_SUBMISSION_FAILURE = 'POST_SUBMISSION_FAILURE';
const postSubmissionFailure = () =>
  ({
    type: POST_SUBMISSION_FAILURE,
  });

export const submitPost = (
  title,
  topicId,

  body,
  url,

  accessToken,

  navigation,
) =>
  dispatch => {
    dispatch(startPostSubmission());

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: accessToken,
    };
    const requestBody = {
      post: {
        title,
        topic_id: topicId,

        body,
        url,
      },
    };
  
    return fetch(`${API_URL}/posts`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify(requestBody)
      })
        .then(
          response => response.json(),
          error => console.log('An error occurred: ' + error)
        )
        .then(
          json => {
            if (json.error) {
              dispatch(postSubmissionFailure());
            } else {
              dispatch(postSubmissionSuccessful(json));
              dispatch(fetchLatestPosts());
              navigation.navigate(LATEST_POSTS);
            }
          },
          () => dispatch(postSubmissionFailure())
        );
  }