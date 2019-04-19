/*
 *
 * Uploader reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  FETCH_CONTENT_SUCCESS_ACTION,
  UPLOADER_ERROR_ACTION,
  UPLOAD_IMAGE_SUCCESS_ACTION,
  UPLOAD_VIDEO_SUCCESS_ACTION,
  UPLOAD_PARAGRAPH_SUCCESS_ACTION,
  LOAD_MORE_SUCCESS_ACTION,
  FILTER_ACTION_SUCCESS,
  FILTER_CHANGE_ACTION,
  UPLOAD_IFRAME_SUCCESS_ACTION
} from './constants';


import { toast } from 'react-toastify';
export const initialState = fromJS({
  items: [],
  pagination: {
    nextPage: 0
  },
  successUpload: "",
  successParagraph: "",
  successYoutube: "",
  errors: "",
  filter: '',
});

function uploaderReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;

    case FETCH_CONTENT_SUCCESS_ACTION:

      return state
        .set('items', action.payload.data)
        .set('pagination', action.payload.meta);

    case UPLOAD_VIDEO_SUCCESS_ACTION:
      toast.success('Uploaded successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      const newlist = state.get('items');
      const mapList1 = [action.payload.data, ...newlist];
      return state
        .set('items', fromJS(mapList1))
        .set('pagination', state)
        .set('successYoutube', action.payload.message);
    ////////////////
    case UPLOAD_IFRAME_SUCCESS_ACTION:
      toast.success('Iframe uploaded successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      const newlist12 = state.get('items');
      const mapList123 = [action.payload.data, ...newlist12];
      return state
        .set('items', fromJS(mapList123))
        .set('pagination', state)
        .set('successYoutube', action.payload.message);


    case UPLOAD_IMAGE_SUCCESS_ACTION:
      toast.success('Image uploaded successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      const newList11 = state.get('items');
      const mapList = [action.payload.data, ...newList11];

      return state
        .set('items', fromJS(mapList))
        //.set('pagination', state)
        .set('successUpload', action.payload.message);


    case UPLOAD_PARAGRAPH_SUCCESS_ACTION:
      dubugger;
      toast.success('Content uploaded successfully', {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      const newList111 = state.get('items');
      const mapList111 = [action.payload.data, ...newList111];
      return state
        .set('items', fromJS(mapList111))
        .set('pagination', state)
        .set('successParagraph', action.payload.message);

    case FILTER_ACTION_SUCCESS:
      return state
        .set('items', action.payload.data)
        .set('pagination', action.payload.meta);

    case LOAD_MORE_SUCCESS_ACTION:
      const list = state.get('items');
      return state
        .set('items', fromJS(list.concat(action.payload.data)))
        .set('pagination', action.payload.meta);
    case UPLOADER_ERROR_ACTION:

      toast.error(action.payload.message, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return state.set('errors', action.payload);

    case FILTER_CHANGE_ACTION:
      return state.set('filter', action.payload);

    default:
      return state;
  }
}

export default uploaderReducer;
