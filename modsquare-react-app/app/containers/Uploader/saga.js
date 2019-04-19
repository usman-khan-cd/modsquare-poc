import { takeEvery, call, put, select } from 'redux-saga/effects';

import {
  getContentApi,
  uploadImageApi,
  uploadContentApi,
  uploadVideoApi,
  uploadIframeApi
} from '../../../server/apiConstants';


import {
  FETCH_CONTENT_ACTION,
  UPLOAD_IMAGE_ACTION,
  UPLOAD_VIDEO_ACTION,
  UPLOAD_PARAGRAPH_ACTION,
  LOAD_MORE_ACTION,
  FILTER_ACTION,
  UPLOAD_IFRAME_ACTION
} from './constants';
import { getUtil, postUtil } from '../Utils/index';
import {
  uploaderErrorAction,
  fetchContentSuccessAction,
  uploadVideoSuccessAction,
  uploadImageSuccessAction,
  uploadParaSuccessAction,
  loadMoreSuccessAction,
  filterActionSuccess,
  uplaodIframeSuccessAction
} from './actions';

import { filterSelector } from './selectors';

// Individual exports for testing

function* fetchContent() {
  const url = getContentApi;
  const response = yield call(getUtil, url);

  if (response.data.code === 200) {
    yield put(fetchContentSuccessAction(response.data));
  } else {
    yield put(uploaderErrorAction(response.data.message));
  }
}

function* uploadI(action) {
  const url = uploadImageApi;
  const formData = new FormData();
  formData.append('image_item', action.payload);
  
  let response;
  try {
       response = yield call(postUtil, url, formData);
    
    if (response.data.code === 200) {
      yield put(uploadImageSuccessAction(response.data));
    }
  }
  catch (error) {
    
    console.log(error, '!!!!!!!!!!!!!11')
    yield put(uploaderErrorAction(response.data.message));
  }

}

function* uploadU(action) {
  const url = uploadVideoApi;
  action.payload = { video_item: action.payload };
  const response = yield call(postUtil, url, action.payload);
  if (response.data.code === 200) {
    yield put(uploadVideoSuccessAction(response.data));
  } else {
    yield put(uploaderErrorAction(response.data.message));
  }
}

function* uploadIframe(action) {
  
  const url = uploadIframeApi;
  action.payload = { iframe_item: action.payload };
  
  const response = yield call(postUtil, url, action.payload);
  
  if (response.data.code === 200) {
    yield put(uplaodIframeSuccessAction(response.data));
  } else {
    yield put(uploaderErrorAction(response.data.message));
  }
}



function* uploadText(action) {
  const url = uploadContentApi;

  action.payload = { text_item: action.payload };

  const response = yield call(postUtil, url, action.payload);
  if (response.data.code === 200) {
    yield put(uploadParaSuccessAction(response.data));
  } else {
    yield put(uploaderErrorAction(response.data.message));
  }
}

function* loadMore(action) {
  
  const filter = yield select(filterSelector());
  const url = `${getContentApi}?page=${action.payload}&&filter=${filter}`;
  const response = yield call(getUtil, url);
  
  if (response.data.code === 200) {

    yield put(loadMoreSuccessAction(response.data));
  } else {
    yield put(uploaderErrorAction(response.data.message));
  }
}
function* filterFunc(action) {

  if (action.payload === 'all') {
    const url = getContentApi;
    const response = yield call(getUtil, url);

    if (response.data.code === 200) {
      yield put(fetchContentSuccessAction(response.data));
    } else {
      yield put(uploaderErrorAction(response.data.message));
    }
  } else {
    const url = `${getContentApi}?filter=${action.payload}`;
    const response = yield call(getUtil, url);
    if (response.data.code === 200) {
      yield put(filterActionSuccess(response.data));
    } else {
      yield put(uploaderErrorAction(response.data.message));
    }
  }
}

export default function* uploaderSaga() {
  // See example in containers/HomePage/saga.js
  yield takeEvery(FETCH_CONTENT_ACTION, fetchContent);
  yield takeEvery(UPLOAD_IMAGE_ACTION, uploadI);
  yield takeEvery(UPLOAD_VIDEO_ACTION, uploadU);
  yield takeEvery(UPLOAD_PARAGRAPH_ACTION, uploadText);
  yield takeEvery(LOAD_MORE_ACTION, loadMore);
  yield takeEvery(FILTER_ACTION, filterFunc);
  yield takeEvery(UPLOAD_IFRAME_ACTION, uploadIframe)
  // , uploadUrl()
  // yield all([fetch(), uploadImage(), uploadUrl()]);
}
