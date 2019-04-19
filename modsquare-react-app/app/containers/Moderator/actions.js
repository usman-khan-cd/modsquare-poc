/*
 *
 * Moderator actions
 *
 */

import {
  DEFAULT_ACTION,
  FETCH_CONTENT_ACTION,
  FETCH_CONTENT_SUCCESS_ACTION,
  FETCH_CONTENT_FAILER_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_FAILER_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_SUCCESS_ACTION,
  PUT_CONTENT_REJECT_STATUS_ACTION,
  PUT_CONTENT_REJECT_STATUS_FAILER_ACTION,
  PUT_CONTENT_REJECT_STATUS_SUCCESS_ACTION,
  LOAD_MORE_ACTION,
  LOAD_MORE_SUCCESS,
  FILTER_ACTION_MOD,
  SUCCESS_FILTER_ACTION,
  FILTER_CHANGE_ACTION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function changeFilterAction(payload) {
  return {
    type: FILTER_CHANGE_ACTION,
    payload,
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

export function fetchContentFailerAction(payload) {
  return {
    type: FETCH_CONTENT_FAILER_ACTION,
    payload,
  };
}

export function putAcceptStatusAction(payload) {
  return {
    type: PUT_CONTENT_ACCEPT_STATUS_ACTION,
    payload,
  };
}

export function putAcceptStatusFailerAction(payload) {
  return {
    type: PUT_CONTENT_ACCEPT_STATUS_FAILER_ACTION,
    payload,
  };
}

export function putAcceptStatusSuccessAction(payload) {
  return {
    type: PUT_CONTENT_ACCEPT_STATUS_SUCCESS_ACTION,
    payload,
  };
}

export function putRejectStatusAction(payload) {
  return {
    type: PUT_CONTENT_REJECT_STATUS_ACTION,
    payload,
  };
}

export function putRejectStatusFailerAction(payload) {
  return {
    type: PUT_CONTENT_REJECT_STATUS_FAILER_ACTION,
    payload,
  };
}

export function putRejectStatusSuccessAction(payload) {
  return {
    type: PUT_CONTENT_REJECT_STATUS_SUCCESS_ACTION,
    payload,
  };
}

export function loadMoreAction(payload) {
  return {
    type: LOAD_MORE_ACTION,
    payload,
  };
}

export function loadMoreSuccess(payload) {
  return {
    type: LOAD_MORE_SUCCESS,
    payload,
  };
}

export function filterAction(payload) {
  return {
    type: FILTER_ACTION_MOD,
    payload,
  };
}

export function successfilterAction(payload) {
  return {
    type: SUCCESS_FILTER_ACTION,
    payload,
  };
}
