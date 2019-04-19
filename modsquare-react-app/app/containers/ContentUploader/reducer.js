/*
 *
 * ContentUploader reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({
  items: [],
  pagination: {},
  errors: null,
});

function contentUploaderReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default contentUploaderReducer;
