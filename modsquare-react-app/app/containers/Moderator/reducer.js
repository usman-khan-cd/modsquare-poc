/*
 *
 * Moderator reducer
 *
 */

import { fromJS } from 'immutable';
import {
  FETCH_CONTENT_SUCCESS_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_ACTION,
  PUT_CONTENT_REJECT_STATUS_ACTION,
  PUT_CONTENT_REJECT_STATUS_SUCCESS_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_SUCCESS_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_FAILER_ACTION,
  PUT_CONTENT_REJECT_STATUS_FAILER_ACTION,
  LOAD_MORE_SUCCESS,
  SUCCESS_FILTER_ACTION,
  FILTER_CHANGE_ACTION,
} from './constants';

export const initialState = fromJS({
  items: [],
  pagination: {},
  filter: '',
});

function moderatorReducer(state = initialState, action) {
  switch (action.type) {
    // Fetching
    case FETCH_CONTENT_SUCCESS_ACTION:
      return state
        .set('items', action.payload.data)
        .set('pagination', action.payload.meta);
    // Reject
    case PUT_CONTENT_REJECT_STATUS_ACTION:
      return state;
    case PUT_CONTENT_REJECT_STATUS_FAILER_ACTION:
      const newList = state.get('items');
      return state.set('items', fromJS([action.payload.data].concat(newList)));
    case PUT_CONTENT_REJECT_STATUS_SUCCESS_ACTION:
      const newList1 = state.get('items');

      const updatedRejectionList = newList1.map(item => {
        if (item._id == action.payload.data._id) {
          item = action.payload.data;
        }
        return item;
      });

      return state.set('items', fromJS(updatedRejectionList));

    // Accept
    case PUT_CONTENT_ACCEPT_STATUS_ACTION:
      return state;
    case PUT_CONTENT_ACCEPT_STATUS_SUCCESS_ACTION:
      const newList2 = state.get('items');
      return state.set('items', fromJS([action.payload.data].concat(newList2)));
    case PUT_CONTENT_ACCEPT_STATUS_FAILER_ACTION:
      const newList3 = state.get('items');
      return state.set('items', fromJS([action.payload.data].concat(newList3)));

    // LoadMore
    case LOAD_MORE_SUCCESS:
      const list = state.get('items');

      return state
        .set('items', fromJS(list.concat(action.payload.data)))
        .set('pagination', action.payload.meta);

    // Filter
    case SUCCESS_FILTER_ACTION:
      return state.set('items', action.payload.data);

    case FILTER_CHANGE_ACTION:
      return state.set('filter', action.payload);

    default:
      return state;
  }
}

export default moderatorReducer;
