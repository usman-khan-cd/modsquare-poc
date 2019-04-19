import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { getUtil, putUtil } from '../Utils/index';
import {
  FETCH_CONTENT_ACTION,
  PUT_CONTENT_ACCEPT_STATUS_ACTION,
  PUT_CONTENT_REJECT_STATUS_ACTION,
  LOAD_MORE_ACTION,
  FILTER_ACTION_MOD,
} from './constants';

import {
  fetchContentSuccessAction,
  fetchContentFailerAction,
  putAcceptStatusFailerAction,
  putRejectStatusFailerAction,
  loadMoreSuccess,
  successfilterAction,
  fetchContentAction,
} from './actions';

import { filterSelector } from './selectors';
import {
  getContentModeratorApi,
  updateContentModeratorApi,
} from '../../../server/apiConstants';

function* fetchContent() {
  const filter = yield select(filterSelector());
  const url = `${getContentModeratorApi}?filter=${filter}`;

  const response = yield call(getUtil, url);
  if (response.data.code === 200) {
    yield put(fetchContentSuccessAction(response.data));
  } else {
    toast.error('Unable to Load Data Please Check Server');
    yield put(fetchContentFailerAction(response));
  }
}

function* putAccept(action) {
  const url = `${updateContentModeratorApi}${action.payload}`;
  const data = {
    status: 'accepted',
  };
  const response = yield call(putUtil, url, data);
  if (response.data.code === 200) {
    toast.success('Feed Accepted Successfully');
    yield put(fetchContentAction());
  } else {
    toast.error('Feed Accepted Failed');
    yield put(putAcceptStatusFailerAction(response.data));
  }
}

function* putReject(action) {
  const url = `${updateContentModeratorApi}${action.payload}`;
  const data = {
    status: 'rejected',
  };

  const response = yield call(putUtil, url, data);
  if (response.data.code === 200) {
    toast.success('Feed Rejected Successfully');
    yield put(fetchContentAction());
  } else {
    toast.error('Feed Rejected Failed');
    yield put(putRejectStatusFailerAction(response.data));
  }
}

function* LoadMore(action) {
  const filter = yield select(filterSelector());
  const url = `${getContentModeratorApi}?page=${
    action.payload
  }&&filter=${filter}`;
  const response = yield call(getUtil, url);
  if (response.data.code === 200) {
    yield put(loadMoreSuccess(response.data));
  }
}

function* Filter(action) {
  const url = `${getContentModeratorApi}?filter=${action.payload}`;
  const response = yield call(getUtil, url);
  if (response.data.code === 200) {
    yield put(successfilterAction(response.data));
  }
}

export default function* moderatorSaga() {
  yield takeEvery(PUT_CONTENT_ACCEPT_STATUS_ACTION, putAccept);
  yield takeEvery(PUT_CONTENT_REJECT_STATUS_ACTION, putReject);
  yield takeEvery(FETCH_CONTENT_ACTION, fetchContent);
  yield takeEvery(LOAD_MORE_ACTION, LoadMore);
  yield takeEvery(FILTER_ACTION_MOD, Filter);
}
