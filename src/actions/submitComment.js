import {API_URL} from '../constants/API';

import {fetchComments} from './requestComments';

export const START_COMMENT_SUBMISSION = 'START_COMMENT_SUBMISSION';
const startCommentSubmission = () =>
  ({
    type: START_COMMENT_SUBMISSION,
  });

export const COMMENT_SUBMISSION_SUCCESSFUL = 'COMMENT_SUBMISSION_SUCCESSFUL';
const commentSubmissionSuccessful = comment =>
  ({
    type: COMMENT_SUBMISSION_SUCCESSFUL,
    comment,
  });

export const COMMENT_SUBMISSION_FAILURE = 'COMMENT_SUBMISSION_FAILURE';
const commentSubmissionFailure = () =>
  ({
    type: COMMENT_SUBMISSION_FAILURE,
  });

export const submitComment = (
  body,
  postId,
  parentId,

  accessToken,
) =>
  dispatch => {
    dispatch(startCommentSubmission());

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: accessToken,
    };
    const requestBody = {
      comment: {
        body,
        parent_id: parentId,
      },
    };
  
    return fetch(`${API_URL}/posts/${postId}/comments`,
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
              dispatch(commentSubmissionFailure());
            } else {
              dispatch(commentSubmissionSuccessful(json.data));
              dispatch(fetchComments(postId));
            }
          },
          () => dispatch(commentSubmissionFailure())
        );
  }