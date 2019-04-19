/*
 *
 * ContentUploader actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONTENT_ACTION,
  FETCH_CONTENT_SUCCESS_ACTION,
  UPLOADER_ERROR_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchContentAction() {
  return {
    type: FETCH_CONTENT_ACTION,
  };
}
export function fetchContentSuccessAction(payload) {
  return {
    type: FETCH_CONTENT_SUCCESS_ACTION,
    payload,
  };
}
export function uploaderErrorAction(payload) {
  return {
    type: UPLOADER_ERROR_ACTION,
    payload,
  };
}
