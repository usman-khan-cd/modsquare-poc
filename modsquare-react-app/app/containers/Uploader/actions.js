/*
 *
 * Uploader actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONTENT_ACTION,
  FETCH_CONTENT_SUCCESS_ACTION,
  UPLOADER_ERROR_ACTION,
  UPLOAD_IMAGE_ACTION,
  UPLOAD_IMAGE_SUCCESS_ACTION,
  UPLOAD_IMAGE_ERROR_ACTION,
  UPLOAD_VIDEO_ACTION,
  UPLOAD_VIDEO_SUCCESS_ACTION,
  UPLOAD_VIDEO_ERROR_ACTION,
  UPLOAD_PARAGRAPH_ACTION,
  UPLOAD_PARAGRAPH_SUCCESS_ACTION,
  UPLOAD_PARAGRAPH_ERROR_ACTION,
  LOAD_MORE_ACTION,
  LOAD_MORE_SUCCESS_ACTION,
  FILTER_ACTION,
  FILTER_ACTION_SUCCESS,
  FILTER_CHANGE_ACTION,
  UPLOAD_IFRAME_ACTION,
  UPLOAD_IFRAME_SUCCESS_ACTION
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
export function uploadImageAction(payload) {
  return {
    type: UPLOAD_IMAGE_ACTION,
    payload,
  };
}

export function uploadImageSuccessAction(payload) {
  return {
    type: UPLOAD_IMAGE_SUCCESS_ACTION,
    payload,
  };
}
export function uploadImageErrorAction() {
  return {
    type: UPLOAD_IMAGE_ERROR_ACTION,
  };
}
export function uploadVideoAction(payload) {
  return {
    type: UPLOAD_VIDEO_ACTION,
    payload,
  };
}
export function uplaodIframeAction(payload) {
  return {
    type: UPLOAD_IFRAME_ACTION,
    payload
  }

}

export function uplaodIframeSuccessAction(payload) {
  return {
    type: UPLOAD_IFRAME_SUCCESS_ACTION,
    payload
  }

}


export function uploadVideoSuccessAction(payload) {
  return {
    type: UPLOAD_VIDEO_SUCCESS_ACTION,
    payload,
  };
}
export function uploadVideoErrorAction() {
  return {
    type: UPLOAD_VIDEO_ERROR_ACTION,
  };
}

export function uploadParaAction(payload) {
  return {
    type: UPLOAD_PARAGRAPH_ACTION,
    payload,
  };
}
export function loadMoreAction(payload) {
  debugger;
  return {
    type: LOAD_MORE_ACTION,
    payload,
  };
}
export function loadMoreSuccessAction(payload) {
  return {
    type: LOAD_MORE_SUCCESS_ACTION,
    payload,
  };
}

export function uploadParaSuccessAction(payload) {
  return {
    type: UPLOAD_PARAGRAPH_SUCCESS_ACTION,
    payload,
  };
}
export function uploadParaErrorAction() {
  return {
    type: UPLOAD_PARAGRAPH_ERROR_ACTION,
  };
}
export function filterAction(payload) {
  return {
    type: FILTER_ACTION,
    payload,
  };
}

export function filterActionSuccess(payload) {
  return {
    type: FILTER_ACTION_SUCCESS,
    payload,
  };
}

export function onFilterChange(payload) {
  return {
    type: FILTER_CHANGE_ACTION,
    payload,
  };
}
